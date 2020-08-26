/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import {
  TouchableOpacity,
  ImageBackground,
  View,
  TextInput,
  Picker,
  Alert,
  ToastAndroid
} from 'react-native';
import { Container, Content, Header, Left, Right, Title, Form, Button, Text } from 'native-base';
import ImagePicker from 'react-native-image-picker';
import styles from './styles';
import { FONT_HEADLINE5_PRIMARY } from '../../styles';
import BackButton from '../../components/elements/BackButton';
import Gallery from '../../../assets/svgs/Gallery';
import Camera from '../../../assets/svgs/Camera';
import { ENDPOINT } from '../../configs';

const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      payload: {},
      avatarSource: null
    };
    this.openImage = this.openImage.bind(this);
  }
  componentDidMount() {
    this.fetchApi();
  }
  async fetchApi() {
    const { navigation } = this.props;
    const data = navigation.getParam('data', false);
    const price = JSON.stringify(data.price).toString();
    const stock = JSON.stringify(data.stock).toString();
    delete data.price;
    delete data.stock;
    const params = {
      ...data,
      price,
      stock
    };
    if (!data) {
      Alert.alert('Failed');
      this.props.navigation.navigate('Home');
    } else {
      const source = { uri: `http://${data.picture}` };
      console.log(params);
      this.setState({ payload: params, avatarSource: source });
    }
  }
  handleInput(name, value) {
    this.setState(prevState => ({
      payload: {
        ...prevState.payload,
        [name]: value
      }
    }));
  }
  async handleSubmit() {
    const { payload, avatarSource } = this.state;
    const params = {
      ...payload,
      picture: avatarSource.uri
    };
    delete params.recommendation;
    if (JSON.stringify(avatarSource.uri).substring(1, 5) === 'http') {
      delete params.picture;
    }
    try {
      const result = await ENDPOINT.editMenu(params.menuId, params);
      if (result.code === 200) {
        ToastAndroid.show('Submit Success', ToastAndroid.SHORT);
        this.props.navigation.navigate('Home');
      } else {
        ToastAndroid.show('Failed', ToastAndroid.SHORT);
      }
    } catch (error) {
      Alert.alert(error);
    }
  }
  openImage() {
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // You can also display the image using data:
        const source = { uri: `data:image/jpeg;base64,${response.data}` };
        this.setState({
          avatarSource: source
        });
      }
    });
  }
  imageBackground() {
    if (this.state.avatarSource === null) {
      return (
        <TouchableOpacity onPress={() => this.openImage()}>
          <ImageBackground style={styles.noImage}>
            <Gallery />
            <Text style={styles.noImageText}>Pilih Gambar</Text>
          </ImageBackground>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity onPress={() => this.openImage()}>
        <ImageBackground source={this.state.avatarSource} style={styles.imageExist}>
          <Camera />
        </ImageBackground>
      </TouchableOpacity>
    );
  }
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <BackButton />
          </Left>
          <Title>
            <Text style={[FONT_HEADLINE5_PRIMARY, styles.headerText]}>Edit Menu</Text>
          </Title>
          <Right />
        </Header>
        <Content>
          <View style={styles.container}>
            {this.imageBackground()}
            <Form style={styles.form}>
              <TextInput
                placeholder="Enter Item Name"
                style={styles.customInput}
                underlineColorAndroid="transparent"
                value={this.state.payload.name}
                onChangeText={value => this.handleInput('name', value)}
              />
              <Picker
                style={styles.customInput}
                selectedValue={this.state.payload.category}
                mode="dropdown"
                onValueChange={value => this.handleInput('category', value)}
              >
                <Picker.Item label="Junkfood" value="Junkfood" />
                <Picker.Item label="Drink" value="Drink" />
                <Picker.Item label="Seafood" value="Seafood" />
                <Picker.Item label="Dessert" value="Dessert" />
                <Picker.Item label="Meal" value="Meal" />
                <Picker.Item label="Vegetarian " value="Vegetarian" />
              </Picker>
              <View style={styles.inlineForm}>
                <TextInput
                  placeholder="Enter Price"
                  style={[styles.customInput, styles.inlineInput]}
                  keyboardType="numeric"
                  value={this.state.payload.price}
                  onChangeText={value => this.handleInput('price', value)}
                />
                <TextInput
                  placeholder="Stock"
                  style={[styles.customInput, styles.inlineInput]}
                  keyboardType="numeric"
                  value={this.state.payload.stock}
                  onChangeText={value => this.handleInput('stock', value)}
                />
              </View>
              <TextInput
                placeholder="Write Some Description"
                style={styles.customInput}
                underlineColorAndroid="transparent"
                value={this.state.payload.description}
                onChangeText={value => this.handleInput('description', value)}
              />
              <View style={styles.separator} />
              <Button style={styles.mainBtn} full onPress={() => this.handleSubmit()}>
                <Text>Save</Text>
              </Button>
            </Form>
          </View>
        </Content>
      </Container>
    );
  }
}

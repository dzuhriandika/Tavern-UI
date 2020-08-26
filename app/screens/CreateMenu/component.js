/* eslint-disable no-prototype-builtins */
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
import { Container, Content, Header, Left, Right, Title, Form, Button, Text, Spinner } from 'native-base';
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
      avatarSource: {},
      // eslint-disable-next-line react/no-unused-state
      item: null,
      payload: {
        name: '',
        category: 'Junkfood',
        description: '',
        price: '',
        stock: ''
      },
      isLoading: false
    };
    this.openImage = this.openImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(name, value) {
    this.setState(prevState => ({
      payload: {
        ...prevState.payload,
        [name]: value
      }
    }));
  }
  async handleSubmit(title) {
    try {
      this.setState({ isLoading: true });
      const { payload, avatarSource } = this.state;
      if (avatarSource.hasOwnProperty('uri')) {
        const params = {
          ...payload,
          picture: avatarSource.uri
        };
        const result = await ENDPOINT.postMenu(params);
        if (result.code === 200) {
          ToastAndroid.show('Submit Success', ToastAndroid.SHORT);
          this.setState({
            payload: {
              name: '',
              category: 'Junkfood',
              description: '',
              price: '',
              stock: ''
            },
            avatarSource: {}
          });
          this.props.navigation.navigate('ListMenu', { title });
        } else {
          console.log(result);
        }
      } else {
        Alert.alert('Please fill the image');
      }
    } catch (error) {
      Alert.alert(error);
    } finally {
      this.setState({ isLoading: false });
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
    if (!this.state.avatarSource.hasOwnProperty('uri')) {
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
  renderButton() {
    if (!this.state.isLoading) {
      return (
        <Button
          style={styles.mainBtn}
          full
          onPress={() => {
            this.props.navigation.navigate('ListMenu');
          }}
        >
          <Text>Save</Text>
        </Button>
      );
    }
    return <Spinner color="#87CAFE" />;
  }
  render() {
    const { name, category, price, description, stock } = this.state.payload;
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <BackButton />
          </Left>
          <Title>
            <Text style={[FONT_HEADLINE5_PRIMARY, styles.headerText]}>Add Menu</Text>
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
                onChangeText={value => {
                  this.handleInput('name', value);
                }}
                value={name}
              />
              <Picker
                style={styles.customInput}
                selectedValue={category}
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
                  onChangeText={value => {
                    this.handleInput('price', value);
                  }}
                  value={price}
                />
                <TextInput
                  placeholder="Stock"
                  style={[styles.customInput, styles.inlineInput]}
                  keyboardType="numeric"
                  onChangeText={value => {
                    this.handleInput('stock', value);
                  }}
                  value={stock}
                />
              </View>
              <TextInput
                placeholder="Write Some Description"
                style={styles.customInput}
                underlineColorAndroid="transparent"
                onChangeText={value => {
                  this.handleInput('description', value);
                }}
                value={description}
              />
              <View style={styles.separator} />
              {this.renderButton()}
            </Form>
          </View>
        </Content>
      </Container>
    );
  }
}

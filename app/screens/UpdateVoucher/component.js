/* eslint-disable no-console */
import React from 'react';
import { TouchableOpacity, ImageBackground, View, TextInput, ToastAndroid, Alert } from 'react-native';
import { Container, Content, Header, Left, Right, Title, Form, Button, Text } from 'native-base';
import ImagePicker from 'react-native-image-picker';
import styles from './styles';
import { FONT_HEADLINE5_PRIMARY } from '../../styles';
import BackButton from '../../components/elements/BackButton';
import Gallery from '../../../assets/svgs/Gallery';
import Camera from '../../../assets/svgs/Camera';
import { ENDPOINT } from '../../configs';
// eslint-disable-next-line import/first
import PropTypes from 'prop-types';
import MainScreen from '../../components/layouts/MainScreen';

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
    if (!data) {
      Alert.alert('Failed');
      this.props.navigation.navigate('Voucher');
    } else {
      this.setState({ payload: data });
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
      title: payload.title,
      code: payload.code,
      value: payload.value,
      exp: payload.exp,
      description: payload.description,
      photo: avatarSource
    };

    console.log(params);
    try {
      const result = await ENDPOINT.updateVoucher(payload.voucher_id, params);
      if (result.code === 200) {
        ToastAndroid.show('Submit Success', ToastAndroid.SHORT);
        this.props.navigation.navigate('Voucher');
      } else {
        ToastAndroid.show('Failed', ToastAndroid.SHORT);
        console.log(result);
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
        const source = `data:image/jpeg;base64,${response.data}`;
        this.setState({
          avatarSource: source
        });
      }
    });
  }
  imageBackground() {
    const { avatarSource } = this.state;
    if (avatarSource === null) {
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
        <ImageBackground source={{ uri: avatarSource }} style={styles.imageExist}>
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
            <Text style={[FONT_HEADLINE5_PRIMARY, styles.headerText]}>Update Voucher</Text>
          </Title>
          <Right />
        </Header>
        <MainScreen>
          <Content>
            <View style={styles.container}>
              {this.imageBackground()}
              <Form style={styles.form}>
                <TextInput
                  placeholder="Judul"
                  style={styles.customInput}
                  underlineColorAndroid="transparent"
                  value={this.state.payload.title}
                  // eslint-disable-next-line no-shadow
                  onChangeText={value => this.handleInput('title', value)}
                />
                <View style={styles.inlineForm}>
                  <TextInput
                    placeholder="Kode Voucher"
                    style={[styles.customInput, styles.inlineInput]}
                    underlineColorAndroid="transparent"
                    value={this.state.payload.code}
                    // eslint-disable-next-line no-shadow
                    onChangeText={value => this.handleInput('code', value)}
                  />
                  <TextInput
                    placeholder="Expired"
                    style={[styles.customInput, styles.inlineInput]}
                    underlineColorAndroid="transparent"
                    value={this.state.payload.exp}
                    // eslint-disable-next-line no-shadow
                    onChangeText={value => this.handleInput('exp', value)}
                  />
                </View>
                <TextInput
                  placeholder="Jumlah Diskon"
                  style={styles.customInput}
                  underlineColorAndroid="transparent"
                  keyboardType="numeric"
                  value={this.state.payload.value}
                  // eslint-disable-next-line no-shadow
                  onChangeText={value => this.handleInput('value', value)}
                />
                <TextInput
                  placeholder="Deskripsi"
                  style={styles.customInput}
                  underlineColorAndroid="transparent"
                  value={this.state.payload.description}
                  // eslint-disable-next-line no-shadow
                  onChangeText={value => this.handleInput('description', value)}
                />
                <View style={styles.separator} />
                <Button style={styles.mainBtn} full onPress={() => this.handleSubmit()}>
                  <Text>Add Voucher</Text>
                </Button>
              </Form>
            </View>
          </Content>
        </MainScreen>
      </Container>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};

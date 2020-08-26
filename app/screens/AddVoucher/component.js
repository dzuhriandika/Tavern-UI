/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React from 'react';
import { TouchableOpacity, ImageBackground, View, TextInput, ToastAndroid, Alert } from 'react-native';
import { Container, Content, Header, Left, Right, Title, Form, Button, Text } from 'native-base';
import ImagePicker from 'react-native-image-picker';
import PropTypes from 'prop-types';

import styles from './styles';
import { FONT_HEADLINE5_PRIMARY } from '../../styles';
import BackButton from '../../components/elements/BackButton';
import Gallery from '../../../assets/svgs/Gallery';
import Camera from '../../../assets/svgs/Camera';
import { ENDPOINT } from '../../configs';
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
  /**
   * constructor(props) {
    super(props);
    this.state = {
      title: '',
      code: '',
      value: '',
      exp: '',
      description: '',
      isLoading: false,
      avatarSource: ''
    };
    this.openImage = this.openImage.bind(this);
  }
  */
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
        Alert.alert(source);
        /**
         this.setState({
          avatarSource: source
        });
        */
      }
    });
  }
  imageBackground() {
    return (
      <TouchableOpacity onPress={() => this.openImage()}>
        <ImageBackground style={styles.noImage}>
          <Gallery />
          <Text style={styles.noImageText}>Pilih Gambar</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
  _addVoudcher = async () => {
    this.props.navigation.navigate('Voucher');
  };
  /**
   * _addVoudcher = async () => {
    const { title, code, value, exp, description, avatarSource } = this.state;
    const params = { title, code, value, exp, description, photo: avatarSource };
    try {
      this.setState({ isLoading: true });
      console.log({ params });
      const result = await ENDPOINT.addVoucher(params);
      // eslint-disable-next-line no-console
      console.log({ result });
      if (result.code === 200) {
        ToastAndroid.show('Sukses Post', ToastAndroid.SHORT);
        this.props.navigation.navigate('Voucher');
      } else {
        ToastAndroid.show('Failed to post', ToastAndroid.SHORT);
      }
    } catch (error) {
      console.log(error);
      ToastAndroid.show('error.networkError', ToastAndroid.SHORT);
    } finally {
      this.setState({ isLoading: false });
    }
  }; 
  */
  render() {
    // const { title, code, value, exp, description, isLoading } = this.state;
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <BackButton />
          </Left>
          <Title>
            <Text style={[FONT_HEADLINE5_PRIMARY, styles.headerText]}>Add Voucher</Text>
          </Title>
          <Right />
        </Header>
        <MainScreen // isLoading={isLoading}
        >
          <Content>
            <View style={styles.container}>
              {this.imageBackground()}
              <Form style={styles.form}>
                <TextInput
                  placeholder="Judul"
                  style={styles.customInput}
                  underlineColorAndroid="transparent"
                  // value={title}
                  // eslint-disable-next-line no-shadow
                  // onChangeText={title => this.setState({ title })}
                />
                <View style={styles.inlineForm}>
                  <TextInput
                    placeholder="Kode Voucher"
                    style={[styles.customInput, styles.inlineInput]}
                    underlineColorAndroid="transparent"
                    // value={code}
                    // eslint-disable-next-line no-shadow
                    // onChangeText={code => this.setState({ code })}
                  />
                  <TextInput
                    placeholder="Expired"
                    style={[styles.customInput, styles.inlineInput]}
                    underlineColorAndroid="transparent"
                    // value={exp}
                    // eslint-disable-next-line no-shadow
                    // onChangeText={exp => this.setState({ exp })}
                  />
                </View>
                <TextInput
                  placeholder="Jumlah Diskon"
                  style={styles.customInput}
                  underlineColorAndroid="transparent"
                  keyboardType="numeric"
                  // value={value}
                  // eslint-disable-next-line no-shadow
                  // onChangeText={value => this.setState({ value })}
                />
                <TextInput
                  placeholder="Deskripsi"
                  style={styles.customInput}
                  underlineColorAndroid="transparent"
                  // value={description}
                  // eslint-disable-next-line no-shadow
                  // onChangeText={description => this.setState({ description })}
                />
                <View style={styles.separator} />
                <Button style={styles.mainBtn} full onPress={this._addVoudcher}>
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

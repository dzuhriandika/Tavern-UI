/* eslint-disable no-console */
import React from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Button } from 'native-base';
import ImagePicker from 'react-native-image-picker';

import I18n from '../../i18n';
import styles from './styles';
import Gallery from '../../../assets/svgs/Gallery';
import Camera from '../../../assets/svgs/Camera';
import storage from '../../utils/storage';
import STORAGE_KEY from '../../constants/storageKey';
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
      getData: {},
      avatarSource: null,
      // eslint-disable-next-line react/no-unused-state
      item: null
    };
    this.openImage = this.openImage.bind(this);
  }

  componentWillMount() {
    this._getDataProfil();
  }

  _getDataProfil = async () => {
    try {
      const getData = await ENDPOINT.getProfile();
      console.log({ getData });
      if (getData.code === 200) {
        const source = `http://${getData.data.photo}`;
        this.setState({ getData: getData.data, avatarSource: source });
      }
      this.setState({ getData: getData.data });
    } catch (error) {
      console.log(error);
    }
  };

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
          </ImageBackground>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity onPress={() => this.openImage()}>
        <View style={styles.profilWrap}>
          <Image source={this.state.avatarSource} resizeMode="cover" style={styles.profil} />
          <View style={styles.cameraWrap}>
            <Camera />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  _about = () => {
    this.props.navigation.navigate('About');
  };

  _editProfil = () => {
    this.props.navigation.navigate('EditProfil', { userId: this.state.getData.userId });
  };

  _logout = async () => {
    await storage.remove(STORAGE_KEY.TOKEN_LOGIN);
    this.props.navigation.navigate('UserAuth');
  };

  render() {
    // const { getData } = this.state;
    return (
      <View style={styles.Mainscreen}>
        <View style={styles.container}>
          <View style={styles.aboutWrap}>
            <Text onPress={this._about} style={styles.about}>
              {I18n.t('aboutUs')}
            </Text>
          </View>
          <View style={styles.imageWrap}>
            {this.imageBackground()}
            <Text style={styles.name}>Admin</Text>
            <Text style={styles.email}>admin@tavern.com</Text>
            <Button onPress={this._editProfil} style={styles.btnEditProfil}>
              <Text style={styles.teksEditProfil}>{I18n.t('editProfil')}</Text>
            </Button>
            <Button style={styles.btnLogout} onPress={this._logout}>
              <Text style={styles.teksEditProfil}>{I18n.t('logout')}</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

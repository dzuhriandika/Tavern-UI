/* eslint-disable no-unused-vars */
import React from 'react';
import { Text, View, Image, ImageBackground, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import styles from './styles';
import I18n from '../../i18n';
import IMAGES from '../../configs/images';
import Button from '../../components/elements/Button';
import { ENDPOINT } from '../../configs';
import storage from '../../utils/storage';
import { STORAGE_KEY } from '../../constants';
import MainScreen from '../../components/layouts/MainScreen';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // email: '',
      // password: '',
      secureTextEntry: true,
      iconName: 'eye'
      // isLoading: false
    };
  }

  onIconPress = () => {
    const iconName = this.state.secureTextEntry ? 'eye-off' : 'eye';

    this.setState({
      secureTextEntry: !this.state.secureTextEntry,
      iconName
    });
  };

  _forgotPass = async () => {
    this.props.navigation.navigate('ForgotPassword');
  };
  _logIn = async () => {
    this.props.navigation.navigate('App');
  };

  /** 
  _logIn = async () => {
    const { email, password } = this.state;
    const params = { email, password };
    try {
      this.setState({ isLoading: true });
      const result = await ENDPOINT.login(params);
      if (result.code === 200) {
        await storage.set(STORAGE_KEY.TOKEN_LOGIN, result.data);
        this.props.navigation.navigate('App');
      } else {
        ToastAndroid.show('Failed to login', ToastAndroid.SHORT);
      }
    } catch (error) {
      ToastAndroid.show('error.networkError', ToastAndroid.SHORT);
    } finally {
      this.setState({ isLoading: false });
    }
  };
  */

  render() {
    // const { email, password, isLoading } = this.state;
    return (
      <MainScreen // isLoading={isLoading}
      >
        <ImageBackground source={IMAGES.bglogin} style={styles.mainContainer}>
          <View style={styles.logoContainer}>
            <Image source={IMAGES.tavern} resizeMode="contain" style={styles.logo} />
          </View>
          <TextInput
            placeholder={I18n.t('email')}
            underlineColorAndroid="transparent"
            // value={email}
            style={styles.input}
            // eslint-disable-next-line no-shadow
            // onChangeText={email => this.setState({ email })}
          />
          <View style={styles.inputPassword}>
            <TextInput
              {...this.props}
              secureTextEntry={this.state.secureTextEntry}
              underlineColorAndroid="transparent"
              placeholder={I18n.t('password')}
              editable
              // value={password}
              style={styles.inputPass}
              Icon={this.state.iconName}
              // eslint-disable-next-line no-shadow
              // onChangeText={password => this.setState({ password })}
            />
            <TouchableOpacity onPress={this.onIconPress} style={styles.hidePassword}>
              <Icon name={this.state.iconName} size={20} style={styles.iconHide} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={this._forgotPass} style={styles.forgetPass}>
            <Text style={styles.textForgot}>{I18n.t('forgetPass')} </Text>
          </TouchableOpacity>

          <View style={styles.margin} />

          <Button
            type="raised-ripple"
            title={I18n.t('login')}
            onPress={this._logIn}
            customContainer={styles.btn}
            customText={styles.btnText}
          />
        </ImageBackground>
      </MainScreen>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};

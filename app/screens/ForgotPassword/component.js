import React from 'react';
import { Text, View, TextInput, Image, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import I18n from '../../i18n';
import IMAGES from '../../configs/images';
import Button from '../../components/elements/Button';
import { ENDPOINT } from '../../configs';
import MainScreen from '../../components/layouts/MainScreen';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      isLoading: false
    };
  }
  _onSend = async () => {
    const { email } = this.state;
    const params = { email };
    try {
      this.setState({ isLoading: true });
      const result = await ENDPOINT.forgotPass(params);
      if (result.code === 200) {
        this.props.navigation.navigate('Login');
      } else {
        ToastAndroid.show('failed send message', ToastAndroid.SHORT);
      }
    } catch (error) {
      ToastAndroid.show('error.networkError', ToastAndroid.SHORT);
    } finally {
      this.setState({ isLoading: false });
      ToastAndroid.show('Success, please check your email inbox', ToastAndroid.SHORT);
    }
  };

  render() {
    const { email, isLoading } = this.state;
    return (
      <MainScreen isLoading={isLoading}>
        <View style={styles.mainContainer}>
          <View style={styles.logoContainer}>
            <Image source={IMAGES.forgotpass} resizeMode="contain" style={styles.logo} />
          </View>
          <Text style={styles.screenTitle}>{I18n.t('forgotPass')}</Text>
          <Text style={styles.description}>{I18n.t('lorem')}</Text>
          <KeyboardAvoidingView behavior="padding">
            <TextInput
              placeholder={I18n.t('email')}
              underlineColorAndroid="transparent"
              value={email}
              style={styles.input}
              onChangeText={email => this.setState({ email })}
            />
            <View style={styles.margin} />

            <Button
              type="raised-ripple"
              title={I18n.t('send')}
              onPress={this._onSend}
              customContainer={styles.btn}
              customText={styles.btnText}
            />
          </KeyboardAvoidingView>
        </View>
      </MainScreen>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};

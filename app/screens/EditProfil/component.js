/* eslint-disable no-console */
import React from 'react';
import { View, TextInput, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import { Button } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import I18n from '../../i18n';
import styles from './styles';
import HEADER from '../../components/elements/Header';
import MainScreen from '../../components/layouts/MainScreen';
import { ENDPOINT } from '../../configs';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secureTextEntry: true,
      iconName: 'eye',
      isLoading: false,
      name: '',
      password: '',
      confirmPass: '',
      userId: this.props.navigation.state.params.userId
    };
  }

  onIconPress = () => {
    const iconName = this.state.secureTextEntry ? 'eye-off' : 'eye';

    this.setState({
      secureTextEntry: !this.state.secureTextEntry,
      iconName
    });
  };

  _about = () => {
    this.props.navigation.navigate('About');
  };

  _editProfil = async () => {
    const { name, password, confirmPass, userId } = this.state;
    const params = { name, password };
    console.log(params);
    if (password !== confirmPass) {
      ToastAndroid.show('Password not matched', ToastAndroid.SHORT);
    }

    try {
      this.setState({ isLoading: true });
      const result = await ENDPOINT.editProfil(userId, params);
      console.log(result);
      if (result.code === 200) {
        this.props.navigation.navigate('Account');
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

  render() {
    const { name, password, confirmPass, isLoading } = this.state;
    return (
      <MainScreen isLoading={isLoading}>
        <View style={styles.Mainscreen}>
          <HEADER title="EditProfil" back />
          <View style={styles.container}>
            <View style={styles.marginTop} />

            <TextInput
              value={name}
              onChangeText={value => this.setState({ name: value })}
              underlineColorAndroid="transparent"
              placeholder={I18n.t('name')}
              editable
              style={styles.input}
            />
            <View style={styles.inputWrapper}>
              <TextInput
                secureTextEntry={this.state.secureTextEntry}
                Icon={this.state.iconName}
                underlineColorAndroid="transparent"
                placeholder={I18n.t('password')}
                editable
                style={styles.inputPass}
                value={password}
                // eslint-disable-next-line no-shadow
                onChangeText={value => this.setState({ password: value })}
              />
              <TouchableOpacity false onPress={this.onIconPress} style={styles.hidePassword}>
                <Icon name={this.state.iconName} size={20} style={styles.iconHide} />
              </TouchableOpacity>
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                secureTextEntry={this.state.secureTextEntry}
                Icon={this.state.iconName}
                underlineColorAndroid="transparent"
                placeholder={I18n.t('confirmPassword')}
                editable
                style={styles.inputPass}
                value={confirmPass}
                // eslint-disable-next-line no-shadow
                onChangeText={value => this.setState({ confirmPass: value })}
              />
              <TouchableOpacity false onPress={this.onIconPress} style={styles.hidePassword}>
                <Icon name={this.state.iconName} size={20} style={styles.iconHide} />
              </TouchableOpacity>
            </View>

            <Button style={styles.btnSave} onPress={this._editProfil}>
              <Text style={styles.teksSave}>{I18n.t('save')}</Text>
            </Button>
          </View>
        </View>
      </MainScreen>
    );
  }
}

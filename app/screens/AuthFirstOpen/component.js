/* eslint-disable no-console */
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './styles';
import storage from '../../utils/storage';
import STORAGE_KEY from '../../constants/storageKey';

export default class Component extends React.Component {
  componentDidMount() {
    this.checkAuth();
  }

  async checkAuth() {
    const auth = await storage.get(STORAGE_KEY.TOKEN_LOGIN);
    if (JSON.stringify(auth) !== JSON.stringify({})) {
      // this.props.navigation.navigate('App');
      this.props.navigation.navigate('UserAuth');
    } else {
      const isOnboarding = await storage.get(STORAGE_KEY.HAS_VISITED_ONBOARDING);
      if (isOnboarding === true) {
        // this.props.navigation.navigate('UserAuth');
        this.props.navigation.navigate('OnBoarding');
      } else {
        this.props.navigation.navigate('OnBoarding');
      }
    }
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <ActivityIndicator />
      </View>
    );
  }
}

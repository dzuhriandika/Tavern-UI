import React from 'react';
import { View, Text, TextInput, Alert, Image } from 'react-native';
import { Container } from 'native-base';

// import MainScreen from '../../components/layouts/MainScreen';
import PropTypes from 'prop-types';

import Ii8n from '../../i18n';
import IMAGES from '../../configs/images';
import Button from '../../components/elements/Button';
import styles from './styles';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputOne: '',
      inputTwo: '',
      inputTree: '',
      inputFour: '',
      inputAll: 0
    };
  }

  async _addValue() {
    await this.setState({
      inputAll: this.state.inputOne + this.state.inputTwo + this.state.inputTree + this.state.inputFour
    });
    this._handlePress();
  }
  _handlePress() {
    if (this.state.inputAll.length === 4) {
      const a = this.state.inputAll;
      Alert.alert(a);
    } else Alert.alert('ulangi lagi');
  }
  _move() {
    this.secondTextInput.focus();
  }
  _move2() {
    this.thirdTextInput.focus();
  }
  _move3() {
    this.fourTextInput.focus();
  }
  _onSend = async () => {
    this.props.navigation.navigate('Login');
  };
  render() {
    return (
      <Container style={styles.mainContainer}>
        <View>
          <View style={styles.logoContainer}>
            <Image source={IMAGES.imgVerify} style={styles.verify} />
          </View>
          <Text style={styles.verifyTitle}>{Ii8n.t('verifyTitle')}</Text>
          <Text style={styles.verifyDsc}>{Ii8n.t('verifyDesc')}</Text>
          <View style={styles.rowContainer}>
            <TextInput
              style={styles.TextInputStyle}
              keyboardType="numeric"
              maxLength={1}
              returnKeyType="next"
              onChangeText={text => this.setState({ inputOne: text })}
            >
              {this.state.inputOne.length >= 1 ? this._move() : null}
            </TextInput>

            <TextInput
              style={styles.TextInputStyle}
              keyboardType="numeric"
              maxLength={1}
              ref={input => {
                this.secondTextInput = input;
              }}
              returnKeyType="next"
              onChangeText={text => this.setState({ inputTwo: text })}
            >
              {this.state.inputTwo.length >= 1 ? this._move2() : null}
            </TextInput>

            <TextInput
              style={styles.TextInputStyle}
              keyboardType="numeric"
              maxLength={1}
              ref={input => {
                this.thirdTextInput = input;
              }}
              returnKeyType="next"
              onChangeText={text => this.setState({ inputTree: text })}
            >
              {this.state.inputTree.length >= 1 ? this._move3() : null}
            </TextInput>

            <TextInput
              style={styles.TextInputStyle}
              keyboardType="numeric"
              maxLength={1}
              ref={input => {
                this.fourTextInput = input;
              }}
              returnKeyType="next"
              onChangeText={text => this.setState({ inputFour: text })}
            />
          </View>
          <View style={styles.margin}>
            <Button
              type="raised-ripple"
              title={Ii8n.t('verify')}
              customContainer={styles.button}
              customText={styles.buttonText}
              onPress={this._onSend}
            />
          </View>
        </View>
      </Container>
    );
  }
}
Component.propTypes = {
  navigation: PropTypes.object.isRequired
};

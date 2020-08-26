import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Back from '../../../../assets/svgs/Back';

export default class Component extends React.Component {
  _onPress = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      // eslint-disable-next-line react/jsx-no-duplicate-props
      <TouchableOpacity onPress={this._onPress} style={styles.container}>
        <Back />
      </TouchableOpacity>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};

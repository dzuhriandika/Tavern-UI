/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'native-base';
import { Image, TouchableNativeFeedback } from 'react-native';
import styles from './styles';
import images from '../../../configs/images';
import { FONT_BODY1_PRIMARY, FONT_BODY2_PRIMARY } from '../../../styles';

export default class Component extends React.Component {
  render() {
    const { imageURL, title, item, onPress } = this.props;
    return (
      <TouchableNativeFeedback onPress={onPress}>
        <View style={[styles.card, { height: this.props.height }]}>
          <Text style={{ ...FONT_BODY1_PRIMARY, fontWeight: 'bold' }}>{title}</Text>
          <Text style={{ ...FONT_BODY2_PRIMARY, fontWeight: 'bold' }}>
            {item} {item > 1 ? 'Items' : 'Item'}
          </Text>
          <Image source={imageURL} style={styles.cardImage} />
        </View>
      </TouchableNativeFeedback>
    );
  }
}

Component.propTypes = {
  onPress: PropTypes.func.isRequired,
  height: PropTypes.number,
  title: PropTypes.string,
  item: PropTypes.number,
  imageURL: PropTypes.number
};

Component.defaultProps = {
  height: 200,
  title: 'Dummy Title',
  imageURL: images.pizza,
  item: 1
};

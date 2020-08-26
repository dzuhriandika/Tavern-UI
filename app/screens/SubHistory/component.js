/* eslint-disable react-native/no-raw-text */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Text, View } from 'react-native';
import { Thumbnail } from 'native-base';
import IMAGES from '../../configs/images';
import styles from './styles';

export default class Component extends React.Component {
  render() {
    return (
      <View style={styles.boxedContainer}>
        <View style={styles.spaceBetween}>
          <View>
            <Text style={styles.name}>Stephanie Natalia</Text>
            <Text style={styles.email}>aqwcansbgt@gmail.com</Text>
          </View>
          <Thumbnail source={IMAGES.profilePicture} />
        </View>
        <View style={styles.card}>
          <View style={[styles.spaceBetween, styles.blueBox]}>
            <Text style={styles.dateText}>28 MAR 2019</Text>
            <Text style={styles.timeText}>15.30</Text>
          </View>
          <View style={styles.orderList}>
            <View style={[styles.spaceBetween, styles.paddingPutih]}>
              <View>
                <Text style={styles.listHeader}>Makanan / Minuman</Text>
                <Text style={styles.listItem}>1. Bakwan</Text>
                <Text style={styles.listItem}>2. Mendoan</Text>
                <Text style={styles.listItem}>3. Gado-gado</Text>
              </View>
              <View>
                <Text style={styles.listHeader}>Jumlah</Text>
                <Text style={styles.listItem}>10</Text>
                <Text style={styles.listItem}>15</Text>
                <Text style={styles.listItem}>13</Text>
              </View>
              <View>
                <Text style={styles.listHeader}>Harga</Text>
                <Text style={styles.listItem}>18.000,00</Text>
                <Text style={styles.listItem}>12.000,00</Text>
                <Text style={styles.listItem}>80.000,00</Text>
              </View>
            </View>
            <View style={[styles.spaceBetween, styles.line]}>
              <Text style={styles.totalCost}>Total Harga</Text>
              <Text style={styles.totalCostBlue}>110.000,00</Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={[styles.spaceBetween, styles.blueBox]}>
            <Text style={styles.dateText}>28 MAR 2019</Text>
            <Text style={styles.timeText}>15.30</Text>
          </View>
          <View style={styles.orderList}>
            <View style={[styles.spaceBetween, styles.paddingPutih]}>
              <View>
                <Text style={styles.listHeader}>Makanan / Minuman</Text>
                <Text style={styles.listItem}>1. Bakwan</Text>
                <Text style={styles.listItem}>2. Mendoan</Text>
                <Text style={styles.listItem}>3. Gado-gado</Text>
              </View>
              <View>
                <Text style={styles.listHeader}>Jumlah</Text>
                <Text style={styles.listItem}>10</Text>
                <Text style={styles.listItem}>15</Text>
                <Text style={styles.listItem}>13</Text>
              </View>
              <View>
                <Text style={styles.listHeader}>Harga</Text>
                <Text style={styles.listItem}>18.000,00</Text>
                <Text style={styles.listItem}>12.000,00</Text>
                <Text style={styles.listItem}>80.000,00</Text>
              </View>
            </View>
            <View style={[styles.spaceBetween, styles.line]}>
              <Text style={styles.totalCost}>Total Harga</Text>
              <Text style={styles.totalCostBlue}>110.000,00</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

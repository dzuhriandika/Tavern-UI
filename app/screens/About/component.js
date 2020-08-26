/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Container, Content, List, ListItem, Left, Body, Thumbnail, Text } from 'native-base';
import { Image, View, ScrollView } from 'react-native';
import IMAGES from '../../configs/images';
import HEADER from '../../components/elements/Header';
import styles from './styles';

export default class ListAvatarExample extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <HEADER title="About" back />
        <ScrollView>
          <View style={styles.logoWrap}>
            <Image source={IMAGES.tavernAbout} resizeMode="contain" style={styles.logo} />
          </View>
          <View style={styles.description}>
            <Text>
              Tavern adalah layanan pesan antar makanan 24 jam. Kami akan terus memperbanyak wilayah
              operasional TAVERN biar semua orang Indonesia makin mudah kalau mau pesen makanan!
            </Text>
            <Text style={styles.h2}> Our Team</Text>
          </View>
          <Content scrollEnabled={false}>
            <List>
              <ListItem avatar noBorder>
                <Left>
                  <Thumbnail source={IMAGES.bintang} />
                </Left>
                <Body style={styles.body}>
                  <Text style={styles.name}>Bintang Piaggi P.</Text>
                  <Text note style={styles.passion}>
                    Project Leader
                  </Text>
                </Body>
              </ListItem>
              <ListItem avatar noBorder>
                <Left>
                  <Thumbnail source={IMAGES.dzuhri} />
                </Left>
                <Body style={styles.body}>
                  <Text style={styles.name}>Dzuhri Andika P. S.</Text>
                  <Text note style={styles.passion}>
                    Mobile Developer
                  </Text>
                </Body>
              </ListItem>
              <ListItem avatar noBorder>
                <Left>
                  <Thumbnail source={IMAGES.anzal} />
                </Left>
                <Body style={styles.body}>
                  <Text style={styles.name}>Anzalla Dzikri D.</Text>
                  <Text note style={styles.passion}>
                    Mobile Developer
                  </Text>
                </Body>
              </ListItem>
              <ListItem avatar noBorder>
                <Left>
                  <Thumbnail source={IMAGES.babah} />
                </Left>
                <Body style={styles.body}>
                  <Text style={styles.name}>Muhammad Bahtiar A.</Text>
                  <Text note style={styles.passion}>
                    Mobile Developer
                  </Text>
                </Body>
              </ListItem>
              <ListItem avatar noBorder>
                <Left>
                  <Thumbnail source={IMAGES.fakhrul} />
                </Left>
                <Body style={styles.body}>
                  <Text style={styles.name}>Fakhrul Zakaria</Text>
                  <Text note style={styles.passion}>
                    Mobile Developer
                  </Text>
                </Body>
              </ListItem>
              <ListItem avatar noBorder>
                <Left>
                  <Thumbnail source={IMAGES.daffa} />
                </Left>
                <Body style={styles.body}>
                  <Text style={styles.name}>Daffa Raihan Z.</Text>
                  <Text note style={styles.passion}>
                    UI/UX Designer
                  </Text>
                </Body>
              </ListItem>
              <ListItem avatar noBorder>
                <Left>
                  <Thumbnail source={IMAGES.ana} />
                </Left>
                <Body style={styles.body}>
                  <Text style={styles.name}>Julia Dwiana</Text>
                  <Text note style={styles.passion}>
                    UI/UX Designer
                  </Text>
                </Body>
              </ListItem>
            </List>
          </Content>
        </ScrollView>
      </Container>
    );
  }
}

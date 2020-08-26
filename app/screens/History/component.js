/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React from 'react';
import { Container, Content, List, ListItem, Left, Body, Thumbnail, Text } from 'native-base';
import PropTypes from 'prop-types';
import IMAGES from '../../configs/images';

export default class Component extends React.Component {
  _pencet = () => {
    const { navigation } = this.props;
    // navigation.navigate('SubHistory');
    alert('Under development');
  };

  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem avatar noBorder onPress={this._pencet}>
              <Left>
                <Thumbnail source={IMAGES.fotoTeam} />
              </Left>
              <Body>
                <Text>User Cantik</Text>
                <Text note>user@gmail.com</Text>
              </Body>
            </ListItem>
            <ListItem avatar noBorder onPress={this._pencet}>
              <Left>
                <Thumbnail source={IMAGES.fotoTeam} />
              </Left>
              <Body>
                <Text>User Cantik</Text>
                <Text note>user@gmail.com</Text>
              </Body>
            </ListItem>
            <ListItem avatar noBorder onPress={this._pencet}>
              <Left>
                <Thumbnail source={IMAGES.fotoTeam} />
              </Left>
              <Body>
                <Text>User Cantik</Text>
                <Text note>user@gmail.com</Text>
              </Body>
            </ListItem>
            <ListItem avatar noBorder onPress={this._pencet}>
              <Left>
                <Thumbnail source={IMAGES.fotoTeam} />
              </Left>
              <Body>
                <Text>User Cantik</Text>
                <Text note>user@gmail.com</Text>
              </Body>
            </ListItem>
            <ListItem avatar noBorder onPress={this._pencet}>
              <Left>
                <Thumbnail source={IMAGES.fotoTeam} />
              </Left>
              <Body>
                <Text>User Cantik</Text>
                <Text note>user@gmail.com</Text>
              </Body>
            </ListItem>
            <ListItem avatar noBorder onPress={this._pencet}>
              <Left>
                <Thumbnail source={IMAGES.fotoTeam} />
              </Left>
              <Body>
                <Text>User Cantik</Text>
                <Text note>user@gmail.com</Text>
              </Body>
            </ListItem>
            <ListItem avatar noBorder onPress={this._pencet}>
              <Left>
                <Thumbnail source={IMAGES.fotoTeam} />
              </Left>
              <Body>
                <Text>User Cantik</Text>
                <Text note>user@gmail.com</Text>
              </Body>
            </ListItem>
            <ListItem avatar noBorder onPress={this._pencet}>
              <Left>
                <Thumbnail source={IMAGES.fotoTeam} />
              </Left>
              <Body>
                <Text>User Cantik</Text>
                <Text note>user@gmail.com</Text>
              </Body>
            </ListItem>
            <ListItem avatar noBorder onPress={this._pencet}>
              <Left>
                <Thumbnail source={IMAGES.fotoTeam} />
              </Left>
              <Body>
                <Text>User Cantik</Text>
                <Text note>user@gmail.com</Text>
              </Body>
            </ListItem>

            <ListItem avatar noBorder onPress={this._pencet}>
              <Left>
                <Thumbnail source={IMAGES.fotoTeam} />
              </Left>
              <Body>
                <Text>User Cantik</Text>
                <Text note>user@gmail.com</Text>
              </Body>
            </ListItem>
            <ListItem avatar noBorder onPress={this._pencet}>
              <Left>
                <Thumbnail source={IMAGES.fotoTeam} />
              </Left>
              <Body>
                <Text>User Cantik</Text>
                <Text note>user@gmail.com</Text>
              </Body>
            </ListItem>
            <ListItem avatar noBorder onPress={this._pencet}>
              <Left>
                <Thumbnail source={IMAGES.fotoTeam} />
              </Left>
              <Body>
                <Text>User Cantik</Text>
                <Text note>user@gmail.com</Text>
              </Body>
            </ListItem>
            <ListItem avatar noBorder onPress={this._pencet}>
              <Left>
                <Thumbnail source={IMAGES.fotoTeam} />
              </Left>
              <Body>
                <Text>User Cantik</Text>
                <Text note>user@gmail.com</Text>
              </Body>
            </ListItem>
            <ListItem avatar noBorder onPress={this._pencet}>
              <Left>
                <Thumbnail source={IMAGES.fotoTeam} />
              </Left>
              <Body>
                <Text>User Cantik</Text>
                <Text note>user@gmail.com</Text>
              </Body>
            </ListItem>
            <ListItem avatar noBorder onPress={this._pencet}>
              <Left>
                <Thumbnail source={IMAGES.fotoTeam} />
              </Left>
              <Body>
                <Text>User Cantik</Text>
                <Text note>user@gmail.com</Text>
              </Body>
            </ListItem>
            <ListItem avatar noBorder onPress={this._pencet}>
              <Left>
                <Thumbnail source={IMAGES.fotoTeam} />
              </Left>
              <Body>
                <Text>User Cantik</Text>
                <Text note>user@gmail.com</Text>
              </Body>
            </ListItem>
            <ListItem avatar noBorder onPress={this._pencet}>
              <Left>
                <Thumbnail source={IMAGES.fotoTeam} />
              </Left>
              <Body>
                <Text>User Cantik</Text>
                <Text note>user@gmail.com</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};

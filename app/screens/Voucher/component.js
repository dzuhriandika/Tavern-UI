/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React from 'react';
import { Image, FlatList, View, TouchableOpacity } from 'react-native';
import PropsTypes from 'prop-types';
import { scale } from '../../utils/scaling';
import styles from './styles';
import {
  FONT_HEADLINE5_PRIMARY,
  FONT_SUBTITLE1_PRIMARY,
  COLOR_BASE_BUTTON_LOGIN,
  COLOR_BLACK,
  COLOR_GREY_SOLID,
  COLOR_PRIMARY_BLACK
} from '../../styles';
import {
  Container,
  Card,
  CardItem,
  Text,
  Left,
  Header,
  Right,
  Title
  // eslint-disable-next-line import/first
} from 'native-base';
import { ENDPOINT } from '../../configs';
// eslint-disable-next-line import/first

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      voucher: []
    };
  }
  componentDidMount() {
    this._getDataApi();
  }

  // eslint-disable-next-line react/sort-comp
  _onPress = () => {
    // eslint-disable-next-line react/prop-types
    this.props.navigation.navigate('AddVoucher');
  };

  onPress(data) {
    this.props.navigation.navigate('UpdateVoucher', { data });
  }
  _getDataApi = async () => {
    try {
      const result = await ENDPOINT.voucher();
      console.log(result);
      this.setState({ voucher: result.data.data });
      console.log(this.state.voucher);
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      /**
      <Container>
        <Header style={styles.header}>
          <Left>
            <Title>
              <Text style={[FONT_HEADLINE5_PRIMARY, styles.headerText]}>Voucher</Text>
            </Title>
          </Left>
          <Right />
        </Header>
        <View style={{ alignItems: 'flex-end' }}>
          <Text
            onPress={this._onPress}
            style={[
              FONT_SUBTITLE1_PRIMARY,
              styles.btnMenu,
              { marginTop: 14, color: COLOR_BASE_BUTTON_LOGIN, fontSize: 15, marginBottom: 20 }
            ]}
          >
            + Add Voucher
          </Text>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={this.state.voucher}
          keyExtractor={item => item.voucher_id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.onPress(item)}>
              <Card style={{ borderRadius: 15, marginLeft: 14, marginRight: 14 }}>
                <CardItem cardBody>
                  <Image
                    style={{ height: scale(100), width: null, flex: 1 }}
                    resizeMode="cover"
                    source={{
                      uri: `http://${item.photo}`
                    }}
                  />
                </CardItem>

                <CardItem style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Text style={{ color: COLOR_BLACK, fontWeight: 'bold', fontSize: 14 }}>{item.title}</Text>
                  <Text style={{ color: COLOR_GREY_SOLID, fontSize: 12 }}>{item.description}</Text>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '100%'
                    }}
                  >
                    <Text style={{ color: COLOR_PRIMARY_BLACK, fontSize: 12, marginTop: 27 }}>
                      Berlaku Hingga
                    </Text>
                    <Text style={{ color: COLOR_PRIMARY_BLACK, fontSize: 12, marginTop: 27 }}>
                      {item.exp}
                    </Text>
                  </View>
                </CardItem>
              </Card>
            </TouchableOpacity>
          )}
        />
      </Container>
      */
      <Container>
        <Header style={styles.header}>
          <Left>
            <Title>
              <Text style={[FONT_HEADLINE5_PRIMARY, styles.headerText]}>Voucher</Text>
            </Title>
          </Left>
          <Right />
        </Header>
        <View style={{ alignItems: 'flex-end' }}>
          <Text
            onPress={this._onPress}
            style={[
              FONT_SUBTITLE1_PRIMARY,
              styles.btnMenu,
              { marginTop: 14, color: COLOR_BASE_BUTTON_LOGIN, fontSize: 15, marginBottom: 20 }
            ]}
          >
            + Add Voucher
          </Text>
        </View>
        <TouchableOpacity // onPress={() => this.onPress(item)}
        >
          <Card style={{ borderRadius: 15, marginLeft: 14, marginRight: 14 }}>
            <CardItem cardBody>
              <Image
                style={{ height: scale(100), width: null, flex: 1 }}
                resizeMode="cover"
                source={{
                  uri: `https://seduhteh.files.wordpress.com/2015/07/discount.jpg`
                }}
              />
            </CardItem>

            <CardItem style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
              <Text style={{ color: COLOR_BLACK, fontWeight: 'bold', fontSize: 14 }}>Promo HBD</Text>
              <Text style={{ color: COLOR_GREY_SOLID, fontSize: 12 }}>Lorem Ipsum Dolor Sit Amet</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%'
                }}
              >
                <Text style={{ color: COLOR_PRIMARY_BLACK, fontSize: 12, marginTop: 27 }}>
                  Berlaku Hingga
                </Text>
                <Text style={{ color: COLOR_PRIMARY_BLACK, fontSize: 12, marginTop: 27 }}>20/3/2020</Text>
              </View>
            </CardItem>
          </Card>
        </TouchableOpacity>
      </Container>
    );
  }
}
Component.PropsTypes = {
  navigation: PropsTypes.object.isRequired
};

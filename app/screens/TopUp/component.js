/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable react-native/no-raw-text */
/* eslint-disable no-console */
import React from 'react';
import { View, Text, ScrollView, ToastAndroid, FlatList, RefreshControl } from 'react-native';
import { Card, Button, Title, Header, Left, Right } from 'native-base';
import I18n from '../../i18n';
import styles from './styles';
import { FONT_HEADLINE5_PRIMARY } from '../../styles';
import { ENDPOINT } from '../../configs';
import storage from '../../utils/storage';
import { STORAGE_KEY } from '../../constants';

export default class Component extends React.Component {
  /**
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      data: []
    };
    this.refresh = this.refresh.bind(this);
  }
  componentDidMount() {
    this._getDataTopup();
  }

  _getDataTopup = async () => {
    try {
      const getData = await ENDPOINT.topup();
      console.log(getData);
      this.setState({ topup: getData.data });
      console.log(this.state.topup);
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ refreshing: false });
    }
  };
  async _accept(id) {
    const { data } = this.state;
    const params = { data };
    try {
      console.log({ params });
      const result = await ENDPOINT.accept_topup(id);
      console.log({ result });
      if (result.code === 200) {
        ToastAndroid.show('Top Up Success', ToastAndroid.SHORT);
      } else {
        ToastAndroid.show('Failed to Top Up', ToastAndroid.SHORT);
      }
    } catch (error) {
      console.log(error);
      ToastAndroid.show('error.networkError', ToastAndroid.SHORT);
    } finally {
      this.refresh();
    }
  }
  async _cancel(id) {
    const { data } = this.state;
    const params = { data };
    try {
      console.log({ params });
      const result = await ENDPOINT.cancel_topup(id);
      console.log({ result });
      if (result.code === 200) {
        ToastAndroid.show('CancelTop Up Success', ToastAndroid.SHORT);
      } else {
        ToastAndroid.show('Failed Cancel Top Up', ToastAndroid.SHORT);
      }
    } catch (error) {
      console.log(error);
      ToastAndroid.show('error.networkError', ToastAndroid.SHORT);
    } finally {
      this.refresh();
    }
  }
  refresh() {
    this.setState(
      {
        refreshing: true
      },
      () => this._getDataTopup()
    );
  }
*/
  render() {
    // const { refreshing } = this.state;
    return (
      /**
       <View style={styles.overlay}>
        <Header style={styles.header}>
          <Left>
            <Title>
              <Text style={[FONT_HEADLINE5_PRIMARY, styles.headerText]}>Top Up</Text>
            </Title>
          </Left>
          <Right />
        </Header>
        <ScrollView style={styles.container}>
          <FlatList
            data={this.state.topup}
            keyExtractor={item => item.topupId}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={this.refresh} />}
            renderItem={({ item }) => (
              <Card style={styles.card}>
                <View style={styles.cardContainer}>
                  <View style={styles.cardBox}>
                    <Text style={styles.text}>{item.user}</Text>
                    <View style={styles.subTitleBox}>
                      <Text style={styles.text2}>{item.createdAt}</Text>
                    </View>
                  </View>
                  <View style={styles.cardBox2}>
                    <View>
                      <Text style={styles.textBox}>Rp.{item.balance}</Text>
                    </View>
                    <View style={styles.buttonBox}>
                      <Button
                        onPress={() => {
                          this._accept(item.topupId);
                        }}
                        style={styles.buttonAccept}
                      >
                        <Text style={styles.titleButton}>{I18n.t('accept')}</Text>
                      </Button>
                      <Button
                        onPress={() => {
                          this._cancel(item.topupId);
                        }}
                        style={styles.buttonReject}
                      >
                        <Text style={styles.titleButton}>{I18n.t('cancel')}</Text>
                      </Button>
                    </View>
                  </View>
                </View>
              </Card>
            )}
          />
        </ScrollView>
      </View>
      */
      <View style={styles.overlay}>
        <Header style={styles.header}>
          <Left>
            <Title>
              <Text style={[FONT_HEADLINE5_PRIMARY, styles.headerText]}>Top Up</Text>
            </Title>
          </Left>
          <Right />
        </Header>
        <ScrollView style={styles.container}>
          <Card style={styles.card}>
            <View style={styles.cardContainer}>
              <View style={styles.cardBox}>
                <Text style={styles.text}>User Cantik</Text>
                <View style={styles.subTitleBox}>
                  <Text style={styles.text2}>20/3/2019</Text>
                </View>
              </View>
              <View style={styles.cardBox2}>
                <View>
                  <Text style={styles.textBox}>Rp.20000</Text>
                </View>
                <View style={styles.buttonBox}>
                  <Button style={styles.buttonAccept}>
                    <Text style={styles.titleButton}>{I18n.t('accept')}</Text>
                  </Button>
                  <Button style={styles.buttonReject}>
                    <Text style={styles.titleButton}>{I18n.t('cancel')}</Text>
                  </Button>
                </View>
              </View>
            </View>
          </Card>
          <Card style={styles.card}>
            <View style={styles.cardContainer}>
              <View style={styles.cardBox}>
                <Text style={styles.text}>User Cantik</Text>
                <View style={styles.subTitleBox}>
                  <Text style={styles.text2}>20/3/2019</Text>
                </View>
              </View>
              <View style={styles.cardBox2}>
                <View>
                  <Text style={styles.textBox}>Rp.20000</Text>
                </View>
                <View style={styles.buttonBox}>
                  <Button style={styles.buttonAccept}>
                    <Text style={styles.titleButton}>{I18n.t('accept')}</Text>
                  </Button>
                  <Button style={styles.buttonReject}>
                    <Text style={styles.titleButton}>{I18n.t('cancel')}</Text>
                  </Button>
                </View>
              </View>
            </View>
          </Card>
          <Card style={styles.card}>
            <View style={styles.cardContainer}>
              <View style={styles.cardBox}>
                <Text style={styles.text}>User Cantik</Text>
                <View style={styles.subTitleBox}>
                  <Text style={styles.text2}>20/3/2019</Text>
                </View>
              </View>
              <View style={styles.cardBox2}>
                <View>
                  <Text style={styles.textBox}>Rp.20000</Text>
                </View>
                <View style={styles.buttonBox}>
                  <Button style={styles.buttonAccept}>
                    <Text style={styles.titleButton}>{I18n.t('accept')}</Text>
                  </Button>
                  <Button style={styles.buttonReject}>
                    <Text style={styles.titleButton}>{I18n.t('cancel')}</Text>
                  </Button>
                </View>
              </View>
            </View>
          </Card>
          <Card style={styles.card}>
            <View style={styles.cardContainer}>
              <View style={styles.cardBox}>
                <Text style={styles.text}>User Cantik</Text>
                <View style={styles.subTitleBox}>
                  <Text style={styles.text2}>20/3/2019</Text>
                </View>
              </View>
              <View style={styles.cardBox2}>
                <View>
                  <Text style={styles.textBox}>Rp.20000</Text>
                </View>
                <View style={styles.buttonBox}>
                  <Button style={styles.buttonAccept}>
                    <Text style={styles.titleButton}>{I18n.t('accept')}</Text>
                  </Button>
                  <Button style={styles.buttonReject}>
                    <Text style={styles.titleButton}>{I18n.t('cancel')}</Text>
                  </Button>
                </View>
              </View>
            </View>
          </Card>
          <Card style={styles.card}>
            <View style={styles.cardContainer}>
              <View style={styles.cardBox}>
                <Text style={styles.text}>User Cantik</Text>
                <View style={styles.subTitleBox}>
                  <Text style={styles.text2}>20/3/2019</Text>
                </View>
              </View>
              <View style={styles.cardBox2}>
                <View>
                  <Text style={styles.textBox}>Rp.20000</Text>
                </View>
                <View style={styles.buttonBox}>
                  <Button style={styles.buttonAccept}>
                    <Text style={styles.titleButton}>{I18n.t('accept')}</Text>
                  </Button>
                  <Button style={styles.buttonReject}>
                    <Text style={styles.titleButton}>{I18n.t('cancel')}</Text>
                  </Button>
                </View>
              </View>
            </View>
          </Card>
          <Card style={styles.card}>
            <View style={styles.cardContainer}>
              <View style={styles.cardBox}>
                <Text style={styles.text}>User Cantik</Text>
                <View style={styles.subTitleBox}>
                  <Text style={styles.text2}>20/3/2019</Text>
                </View>
              </View>
              <View style={styles.cardBox2}>
                <View>
                  <Text style={styles.textBox}>Rp.20000</Text>
                </View>
                <View style={styles.buttonBox}>
                  <Button style={styles.buttonAccept}>
                    <Text style={styles.titleButton}>{I18n.t('accept')}</Text>
                  </Button>
                  <Button style={styles.buttonReject}>
                    <Text style={styles.titleButton}>{I18n.t('cancel')}</Text>
                  </Button>
                </View>
              </View>
            </View>
          </Card>
          <Card style={styles.card}>
            <View style={styles.cardContainer}>
              <View style={styles.cardBox}>
                <Text style={styles.text}>User Cantik</Text>
                <View style={styles.subTitleBox}>
                  <Text style={styles.text2}>20/3/2019</Text>
                </View>
              </View>
              <View style={styles.cardBox2}>
                <View>
                  <Text style={styles.textBox}>Rp.20000</Text>
                </View>
                <View style={styles.buttonBox}>
                  <Button style={styles.buttonAccept}>
                    <Text style={styles.titleButton}>{I18n.t('accept')}</Text>
                  </Button>
                  <Button style={styles.buttonReject}>
                    <Text style={styles.titleButton}>{I18n.t('cancel')}</Text>
                  </Button>
                </View>
              </View>
            </View>
          </Card>
          <Card style={styles.card}>
            <View style={styles.cardContainer}>
              <View style={styles.cardBox}>
                <Text style={styles.text}>User Cantik</Text>
                <View style={styles.subTitleBox}>
                  <Text style={styles.text2}>20/3/2019</Text>
                </View>
              </View>
              <View style={styles.cardBox2}>
                <View>
                  <Text style={styles.textBox}>Rp.20000</Text>
                </View>
                <View style={styles.buttonBox}>
                  <Button style={styles.buttonAccept}>
                    <Text style={styles.titleButton}>{I18n.t('accept')}</Text>
                  </Button>
                  <Button style={styles.buttonReject}>
                    <Text style={styles.titleButton}>{I18n.t('cancel')}</Text>
                  </Button>
                </View>
              </View>
            </View>
          </Card>
          <Card style={styles.card}>
            <View style={styles.cardContainer}>
              <View style={styles.cardBox}>
                <Text style={styles.text}>User Cantik</Text>
                <View style={styles.subTitleBox}>
                  <Text style={styles.text2}>20/3/2019</Text>
                </View>
              </View>
              <View style={styles.cardBox2}>
                <View>
                  <Text style={styles.textBox}>Rp.20000</Text>
                </View>
                <View style={styles.buttonBox}>
                  <Button style={styles.buttonAccept}>
                    <Text style={styles.titleButton}>{I18n.t('accept')}</Text>
                  </Button>
                  <Button style={styles.buttonReject}>
                    <Text style={styles.titleButton}>{I18n.t('cancel')}</Text>
                  </Button>
                </View>
              </View>
            </View>
          </Card>
          <Card style={styles.card}>
            <View style={styles.cardContainer}>
              <View style={styles.cardBox}>
                <Text style={styles.text}>User Cantik</Text>
                <View style={styles.subTitleBox}>
                  <Text style={styles.text2}>20/3/2019</Text>
                </View>
              </View>
              <View style={styles.cardBox2}>
                <View>
                  <Text style={styles.textBox}>Rp.20000</Text>
                </View>
                <View style={styles.buttonBox}>
                  <Button style={styles.buttonAccept}>
                    <Text style={styles.titleButton}>{I18n.t('accept')}</Text>
                  </Button>
                  <Button style={styles.buttonReject}>
                    <Text style={styles.titleButton}>{I18n.t('cancel')}</Text>
                  </Button>
                </View>
              </View>
            </View>
          </Card>
          <Card style={styles.card}>
            <View style={styles.cardContainer}>
              <View style={styles.cardBox}>
                <Text style={styles.text}>User Cantik</Text>
                <View style={styles.subTitleBox}>
                  <Text style={styles.text2}>20/3/2019</Text>
                </View>
              </View>
              <View style={styles.cardBox2}>
                <View>
                  <Text style={styles.textBox}>Rp.20000</Text>
                </View>
                <View style={styles.buttonBox}>
                  <Button style={styles.buttonAccept}>
                    <Text style={styles.titleButton}>{I18n.t('accept')}</Text>
                  </Button>
                  <Button style={styles.buttonReject}>
                    <Text style={styles.titleButton}>{I18n.t('cancel')}</Text>
                  </Button>
                </View>
              </View>
            </View>
          </Card>
          <Card style={styles.card}>
            <View style={styles.cardContainer}>
              <View style={styles.cardBox}>
                <Text style={styles.text}>User Cantik</Text>
                <View style={styles.subTitleBox}>
                  <Text style={styles.text2}>20/3/2019</Text>
                </View>
              </View>
              <View style={styles.cardBox2}>
                <View>
                  <Text style={styles.textBox}>Rp.20000</Text>
                </View>
                <View style={styles.buttonBox}>
                  <Button style={styles.buttonAccept}>
                    <Text style={styles.titleButton}>{I18n.t('accept')}</Text>
                  </Button>
                  <Button style={styles.buttonReject}>
                    <Text style={styles.titleButton}>{I18n.t('cancel')}</Text>
                  </Button>
                </View>
              </View>
            </View>
          </Card>
          <Card style={styles.card}>
            <View style={styles.cardContainer}>
              <View style={styles.cardBox}>
                <Text style={styles.text}>User Cantik</Text>
                <View style={styles.subTitleBox}>
                  <Text style={styles.text2}>20/3/2019</Text>
                </View>
              </View>
              <View style={styles.cardBox2}>
                <View>
                  <Text style={styles.textBox}>Rp.20000</Text>
                </View>
                <View style={styles.buttonBox}>
                  <Button style={styles.buttonAccept}>
                    <Text style={styles.titleButton}>{I18n.t('accept')}</Text>
                  </Button>
                  <Button style={styles.buttonReject}>
                    <Text style={styles.titleButton}>{I18n.t('cancel')}</Text>
                  </Button>
                </View>
              </View>
            </View>
          </Card>
          <Card style={styles.card}>
            <View style={styles.cardContainer}>
              <View style={styles.cardBox}>
                <Text style={styles.text}>User Cantik</Text>
                <View style={styles.subTitleBox}>
                  <Text style={styles.text2}>20/3/2019</Text>
                </View>
              </View>
              <View style={styles.cardBox2}>
                <View>
                  <Text style={styles.textBox}>Rp.20000</Text>
                </View>
                <View style={styles.buttonBox}>
                  <Button style={styles.buttonAccept}>
                    <Text style={styles.titleButton}>{I18n.t('accept')}</Text>
                  </Button>
                  <Button style={styles.buttonReject}>
                    <Text style={styles.titleButton}>{I18n.t('cancel')}</Text>
                  </Button>
                </View>
              </View>
            </View>
          </Card>
          <Card style={styles.card}>
            <View style={styles.cardContainer}>
              <View style={styles.cardBox}>
                <Text style={styles.text}>User Cantik</Text>
                <View style={styles.subTitleBox}>
                  <Text style={styles.text2}>20/3/2019</Text>
                </View>
              </View>
              <View style={styles.cardBox2}>
                <View>
                  <Text style={styles.textBox}>Rp.20000</Text>
                </View>
                <View style={styles.buttonBox}>
                  <Button style={styles.buttonAccept}>
                    <Text style={styles.titleButton}>{I18n.t('accept')}</Text>
                  </Button>
                  <Button style={styles.buttonReject}>
                    <Text style={styles.titleButton}>{I18n.t('cancel')}</Text>
                  </Button>
                </View>
              </View>
            </View>
          </Card>
          <Card style={styles.card}>
            <View style={styles.cardContainer}>
              <View style={styles.cardBox}>
                <Text style={styles.text}>User Cantik</Text>
                <View style={styles.subTitleBox}>
                  <Text style={styles.text2}>20/3/2019</Text>
                </View>
              </View>
              <View style={styles.cardBox2}>
                <View>
                  <Text style={styles.textBox}>Rp.20000</Text>
                </View>
                <View style={styles.buttonBox}>
                  <Button style={styles.buttonAccept}>
                    <Text style={styles.titleButton}>{I18n.t('accept')}</Text>
                  </Button>
                  <Button style={styles.buttonReject}>
                    <Text style={styles.titleButton}>{I18n.t('cancel')}</Text>
                  </Button>
                </View>
              </View>
            </View>
          </Card>
          <Card style={styles.card}>
            <View style={styles.cardContainer}>
              <View style={styles.cardBox}>
                <Text style={styles.text}>User Cantik</Text>
                <View style={styles.subTitleBox}>
                  <Text style={styles.text2}>20/3/2019</Text>
                </View>
              </View>
              <View style={styles.cardBox2}>
                <View>
                  <Text style={styles.textBox}>Rp.20000</Text>
                </View>
                <View style={styles.buttonBox}>
                  <Button style={styles.buttonAccept}>
                    <Text style={styles.titleButton}>{I18n.t('accept')}</Text>
                  </Button>
                  <Button style={styles.buttonReject}>
                    <Text style={styles.titleButton}>{I18n.t('cancel')}</Text>
                  </Button>
                </View>
              </View>
            </View>
          </Card>
          <Card style={styles.card}>
            <View style={styles.cardContainer}>
              <View style={styles.cardBox}>
                <Text style={styles.text}>User Cantik</Text>
                <View style={styles.subTitleBox}>
                  <Text style={styles.text2}>20/3/2019</Text>
                </View>
              </View>
              <View style={styles.cardBox2}>
                <View>
                  <Text style={styles.textBox}>Rp.20000</Text>
                </View>
                <View style={styles.buttonBox}>
                  <Button style={styles.buttonAccept}>
                    <Text style={styles.titleButton}>{I18n.t('accept')}</Text>
                  </Button>
                  <Button style={styles.buttonReject}>
                    <Text style={styles.titleButton}>{I18n.t('cancel')}</Text>
                  </Button>
                </View>
              </View>
            </View>
          </Card>
          <Card style={styles.card}>
            <View style={styles.cardContainer}>
              <View style={styles.cardBox}>
                <Text style={styles.text}>User Cantik</Text>
                <View style={styles.subTitleBox}>
                  <Text style={styles.text2}>20/3/2019</Text>
                </View>
              </View>
              <View style={styles.cardBox2}>
                <View>
                  <Text style={styles.textBox}>Rp.20000</Text>
                </View>
                <View style={styles.buttonBox}>
                  <Button style={styles.buttonAccept}>
                    <Text style={styles.titleButton}>{I18n.t('accept')}</Text>
                  </Button>
                  <Button style={styles.buttonReject}>
                    <Text style={styles.titleButton}>{I18n.t('cancel')}</Text>
                  </Button>
                </View>
              </View>
            </View>
          </Card>
          <Card transparent style={styles.card} />
          <Card transparent style={styles.card} />
        </ScrollView>
      </View>
    );
  }
}

import React from 'react';
import { Text, View, FlatList, ScrollView } from 'react-native';
import styles from './styles';
import I18n from '../../i18n';

export default class Component extends React.Component {
  state = {
    on: false
  };

  toggle = () => {
    this.setState({
      on: !this.state.on
    });
  };
  render() {
    return (
      <ScrollView style={styles.boxedContainer}>
        <View style={styles.card}>
          <View style={styles.emptyContainer}>
            <View style={[styles.spaceBetween, styles.cardHeader]}>
              <Text style={styles.dateText}>28 MAR 2019</Text>
              <Text style={styles.timeText}>15.30</Text>
            </View>
          </View>
          {this.state.on && (
            <View style={styles.orderList}>
              <View style={[styles.spaceBetween, styles.paddingPutih]}>
                <View>
                  <Text style={styles.listHeader}>{I18n.t('numberOfTransactions')}</Text>
                  <FlatList
                    data={[{ key: '1. Bakwan' }, { key: '2. Mendoan' }, { key: '3. Gado-gado' }]}
                    renderItem={({ item }) => <Text style={styles.listItem}>{item.key}</Text>}
                  />
                </View>
                <View>
                  <Text style={styles.listHeader} />
                  <FlatList
                    data={[{ key: '18.000,00' }, { key: '12.000,00' }, { key: '80.000,00' }]}
                    renderItem={({ item }) => <Text style={styles.listItem}>{item.key}</Text>}
                  />
                </View>
              </View>
              <View style={[styles.spaceBetween, styles.line]}>
                <Text style={styles.totalCost}>{I18n.t('totalCost')}</Text>
                <Text style={styles.totalCostBlue}>110.000,00</Text>
              </View>
            </View>
          )}
          <Text style={styles.button} onPress={this.toggle}>
            {I18n.t('detail')}
          </Text>
        </View>
        <View style={styles.card}>
          <View style={styles.emptyContainer}>
            <View style={[styles.spaceBetween, styles.cardHeader]}>
              <Text style={styles.dateText}>28 MAR 2019</Text>
              <Text style={styles.timeText}>15.30</Text>
            </View>
          </View>
          {this.state.on && (
            <View style={styles.orderList}>
              <View style={[styles.spaceBetween, styles.paddingPutih]}>
                <View>
                  <Text style={styles.listHeader}>{I18n.t('numberOfTransactions')}</Text>
                  <FlatList
                    data={[{ key: '1. Bakwan' }, { key: '2. Mendoan' }, { key: '3. Gado-gado' }]}
                    renderItem={({ item }) => <Text style={styles.listItem}>{item.key}</Text>}
                  />
                </View>
                <View>
                  <Text style={styles.listHeader} />
                  <FlatList
                    data={[{ key: '18.000,00' }, { key: '12.000,00' }, { key: '80.000,00' }]}
                    renderItem={({ item }) => <Text style={styles.listItem}>{item.key}</Text>}
                  />
                </View>
              </View>
              <View style={[styles.spaceBetween, styles.line]}>
                <Text style={styles.totalCost}>{I18n.t('totalCost')}</Text>
                <Text style={styles.totalCostBlue}>110.000,00</Text>
              </View>
            </View>
          )}
          <Text style={styles.button} onPress={this.toggle}>
            {I18n.t('detail')}
          </Text>
        </View>
        <View style={styles.card}>
          <View style={styles.emptyContainer}>
            <View style={[styles.spaceBetween, styles.cardHeader]}>
              <Text style={styles.dateText}>28 MAR 2019</Text>
              <Text style={styles.timeText}>15.30</Text>
            </View>
          </View>
          {this.state.on && (
            <View style={styles.orderList}>
              <View style={[styles.spaceBetween, styles.paddingPutih]}>
                <View>
                  <Text style={styles.listHeader}>{I18n.t('numberOfTransactions')}</Text>
                  <FlatList
                    data={[{ key: '1. Bakwan' }, { key: '2. Mendoan' }, { key: '3. Gado-gado' }]}
                    renderItem={({ item }) => <Text style={styles.listItem}>{item.key}</Text>}
                  />
                </View>
                <View>
                  <Text style={styles.listHeader} />
                  <FlatList
                    data={[{ key: '18.000,00' }, { key: '12.000,00' }, { key: '80.000,00' }]}
                    renderItem={({ item }) => <Text style={styles.listItem}>{item.key}</Text>}
                  />
                </View>
              </View>
              <View style={[styles.spaceBetween, styles.line]}>
                <Text style={styles.totalCost}>{I18n.t('totalCost')}</Text>
                <Text style={styles.totalCostBlue}>110.000,00</Text>
              </View>
            </View>
          )}
          <Text style={styles.button} onPress={this.toggle}>
            {I18n.t('detail')}
          </Text>
        </View>
        <View style={styles.card}>
          <View style={styles.emptyContainer}>
            <View style={[styles.spaceBetween, styles.cardHeader]}>
              <Text style={styles.dateText}>28 MAR 2019</Text>
              <Text style={styles.timeText}>15.30</Text>
            </View>
          </View>
          {this.state.on && (
            <View style={styles.orderList}>
              <View style={[styles.spaceBetween, styles.paddingPutih]}>
                <View>
                  <Text style={styles.listHeader}>{I18n.t('numberOfTransactions')}</Text>
                  <FlatList
                    data={[{ key: '1. Bakwan' }, { key: '2. Mendoan' }, { key: '3. Gado-gado' }]}
                    renderItem={({ item }) => <Text style={styles.listItem}>{item.key}</Text>}
                  />
                </View>
                <View>
                  <Text style={styles.listHeader} />
                  <FlatList
                    data={[{ key: '18.000,00' }, { key: '12.000,00' }, { key: '80.000,00' }]}
                    renderItem={({ item }) => <Text style={styles.listItem}>{item.key}</Text>}
                  />
                </View>
              </View>
              <View style={[styles.spaceBetween, styles.line]}>
                <Text style={styles.totalCost}>{I18n.t('totalCost')}</Text>
                <Text style={styles.totalCostBlue}>110.000,00</Text>
              </View>
            </View>
          )}
          <Text style={styles.button} onPress={this.toggle}>
            {I18n.t('detail')}
          </Text>
        </View>
        <View style={styles.card}>
          <View style={styles.emptyContainer}>
            <View style={[styles.spaceBetween, styles.cardHeader]}>
              <Text style={styles.dateText}>28 MAR 2019</Text>
              <Text style={styles.timeText}>15.30</Text>
            </View>
          </View>
          {this.state.on && (
            <View style={styles.orderList}>
              <View style={[styles.spaceBetween, styles.paddingPutih]}>
                <View>
                  <Text style={styles.listHeader}>{I18n.t('numberOfTransactions')}</Text>
                  <FlatList
                    data={[{ key: '1. Bakwan' }, { key: '2. Mendoan' }, { key: '3. Gado-gado' }]}
                    renderItem={({ item }) => <Text style={styles.listItem}>{item.key}</Text>}
                  />
                </View>
                <View>
                  <Text style={styles.listHeader} />
                  <FlatList
                    data={[{ key: '18.000,00' }, { key: '12.000,00' }, { key: '80.000,00' }]}
                    renderItem={({ item }) => <Text style={styles.listItem}>{item.key}</Text>}
                  />
                </View>
              </View>
              <View style={[styles.spaceBetween, styles.line]}>
                <Text style={styles.totalCost}>{I18n.t('totalCost')}</Text>
                <Text style={styles.totalCostBlue}>110.000,00</Text>
              </View>
            </View>
          )}
          <Text style={styles.button} onPress={this.toggle}>
            {I18n.t('detail')}
          </Text>
        </View>
        <View style={styles.card}>
          <View style={styles.emptyContainer}>
            <View style={[styles.spaceBetween, styles.cardHeader]}>
              <Text style={styles.dateText}>28 MAR 2019</Text>
              <Text style={styles.timeText}>15.30</Text>
            </View>
          </View>
          {this.state.on && (
            <View style={styles.orderList}>
              <View style={[styles.spaceBetween, styles.paddingPutih]}>
                <View>
                  <Text style={styles.listHeader}>{I18n.t('numberOfTransactions')}</Text>
                  <FlatList
                    data={[{ key: '1. Bakwan' }, { key: '2. Mendoan' }, { key: '3. Gado-gado' }]}
                    renderItem={({ item }) => <Text style={styles.listItem}>{item.key}</Text>}
                  />
                </View>
                <View>
                  <Text style={styles.listHeader} />
                  <FlatList
                    data={[{ key: '18.000,00' }, { key: '12.000,00' }, { key: '80.000,00' }]}
                    renderItem={({ item }) => <Text style={styles.listItem}>{item.key}</Text>}
                  />
                </View>
              </View>
              <View style={[styles.spaceBetween, styles.line]}>
                <Text style={styles.totalCost}>{I18n.t('totalCost')}</Text>
                <Text style={styles.totalCostBlue}>110.000,00</Text>
              </View>
            </View>
          )}
          <Text style={styles.button} onPress={this.toggle}>
            {I18n.t('detail')}
          </Text>
        </View>
        <View style={styles.card}>
          <View style={styles.emptyContainer}>
            <View style={[styles.spaceBetween, styles.cardHeader]}>
              <Text style={styles.dateText}>28 MAR 2019</Text>
              <Text style={styles.timeText}>15.30</Text>
            </View>
          </View>
          {this.state.on && (
            <View style={styles.orderList}>
              <View style={[styles.spaceBetween, styles.paddingPutih]}>
                <View>
                  <Text style={styles.listHeader}>{I18n.t('numberOfTransactions')}</Text>
                  <FlatList
                    data={[{ key: '1. Bakwan' }, { key: '2. Mendoan' }, { key: '3. Gado-gado' }]}
                    renderItem={({ item }) => <Text style={styles.listItem}>{item.key}</Text>}
                  />
                </View>
                <View>
                  <Text style={styles.listHeader} />
                  <FlatList
                    data={[{ key: '18.000,00' }, { key: '12.000,00' }, { key: '80.000,00' }]}
                    renderItem={({ item }) => <Text style={styles.listItem}>{item.key}</Text>}
                  />
                </View>
              </View>
              <View style={[styles.spaceBetween, styles.line]}>
                <Text style={styles.totalCost}>{I18n.t('totalCost')}</Text>
                <Text style={styles.totalCostBlue}>110.000,00</Text>
              </View>
            </View>
          )}
          <Text style={styles.button} onPress={this.toggle}>
            {I18n.t('detail')}
          </Text>
        </View>
        <View style={styles.card}>
          <View style={styles.emptyContainer}>
            <View style={[styles.spaceBetween, styles.cardHeader]}>
              <Text style={styles.dateText}>28 MAR 2019</Text>
              <Text style={styles.timeText}>15.30</Text>
            </View>
          </View>
          {this.state.on && (
            <View style={styles.orderList}>
              <View style={[styles.spaceBetween, styles.paddingPutih]}>
                <View>
                  <Text style={styles.listHeader}>{I18n.t('numberOfTransactions')}</Text>
                  <FlatList
                    data={[{ key: '1. Bakwan' }, { key: '2. Mendoan' }, { key: '3. Gado-gado' }]}
                    renderItem={({ item }) => <Text style={styles.listItem}>{item.key}</Text>}
                  />
                </View>
                <View>
                  <Text style={styles.listHeader} />
                  <FlatList
                    data={[{ key: '18.000,00' }, { key: '12.000,00' }, { key: '80.000,00' }]}
                    renderItem={({ item }) => <Text style={styles.listItem}>{item.key}</Text>}
                  />
                </View>
              </View>
              <View style={[styles.spaceBetween, styles.line]}>
                <Text style={styles.totalCost}>{I18n.t('totalCost')}</Text>
                <Text style={styles.totalCostBlue}>110.000,00</Text>
              </View>
            </View>
          )}
          <Text style={styles.button} onPress={this.toggle}>
            {I18n.t('detail')}
          </Text>
        </View>
      </ScrollView>
    );
  }
}

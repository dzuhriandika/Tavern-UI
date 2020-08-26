import React from 'react';
import { Container, Header, Body, Tab, Tabs, Title } from 'native-base';
import DailyReport from '../DailyReport';
import History from '../History';
import styles from './styles';
import I18n from '../../i18n';
import { COLOR_BASE_BUTTON_LOGIN, COLOR_PRIMARY_BLUE } from '../../styles';

export default class Component extends React.Component {
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Body>
            <Title style={styles.title}>{I18n.t('report')}</Title>
          </Body>
        </Header>
        <Tabs tabBarUnderlineStyle={{ backgroundColor: COLOR_BASE_BUTTON_LOGIN }}>
          <Tab
            heading="DailyReport"
            tabStyle={styles.tabStyle}
            activeTabStyle={styles.tabStyle}
            textStyle={styles.textStyle}
            activeTextStyle={{ color: COLOR_PRIMARY_BLUE }}
          >
            <DailyReport />
          </Tab>
          <Tab
            heading="History"
            tabStyle={styles.tabStyle}
            activeTabStyle={styles.tabStyle}
            textStyle={styles.textStyle}
            activeTextStyle={{ color: COLOR_PRIMARY_BLUE }}
          >
            <History />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

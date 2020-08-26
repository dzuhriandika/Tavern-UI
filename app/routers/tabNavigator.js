import React from 'react';
import { TabNavigator } from 'react-navigation';
import { HomeStack, TopUpStack, ReportStack, AccountStack, VoucherStack } from './stackNavigator';
import TabBarBottom from '../components/elements/TabBarBottom';
import TabBarIcon from '../components/elements/TabBarIcon';
import Home from '../../assets/svgs/Home';
import TopUp from '../../assets/svgs/TopUp';
import Report from '../../assets/svgs/Report';
import Voucher from '../../assets/svgs/Voucher';
import Account from '../../assets/svgs/Account';
import { COLOR_BASE_PRIMARY_MAIN } from '../styles';

const COLOR_DARK_GREY = '#797979';
const COLOR_GREY = '#bdbdbd';
const COLOR_WHITE = '#ffffff';

const createTab = ({ stack, label, image, iconStyle, badge }) => ({
  screen: stack,
  navigationOptions: ({ navigation }) => ({
    tabBarLabel: label,
    tabBarIcon: ({ tintColor }) => (
      <TabBarIcon
        label={label}
        isActive={tintColor === COLOR_BASE_PRIMARY_MAIN}
        icon={tintColor === COLOR_BASE_PRIMARY_MAIN ? image.active : image.inactive}
        iconStyle={[iconStyle, { height: 30, width: 30, tintColor }]}
        badge={badge}
        navigation={navigation}
      />
    )
  })
});

const navigatorConfig = {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  backBehavior: true,
  lazy: true,
  swipeEnabled: false,
  animationEnabled: true,
  tabBarOptions: {
    showLabel: false,
    showIcon: true,
    activeTintColor: COLOR_BASE_PRIMARY_MAIN,
    inactiveTintColor: COLOR_GREY,
    style: {
      borderTopWidth: 0,
      justifyContent: 'space-between',
      backgroundColor: COLOR_WHITE,
      height: 60
    },
    labelStyle: {
      color: COLOR_DARK_GREY
    },
    tabStyle: {},
    indicatorStyle: {
      backgroundColor: COLOR_WHITE
    }
  }
};

const createTabNavigator = (tabDefinations = []) => {
  const tabs = tabDefinations.map(createTab);
  return new TabNavigator(tabs, navigatorConfig);
};

export const AppStack = createTabNavigator([
  {
    label: 'Home',
    stack: HomeStack,
    image: {
      active: <Home active />,
      inactive: <Home />
    }
  },
  {
    label: 'Top Up',
    stack: TopUpStack,
    image: {
      active: <TopUp active />,
      inactive: <TopUp />
    }
  },
  {
    label: 'Report',
    stack: ReportStack,
    image: {
      active: <Report active />,
      inactive: <Report />
    }
  },
  {
    label: 'Voucher',
    stack: VoucherStack,
    image: {
      active: <Voucher active />,
      inactive: <Voucher  />
    },
  },
  {
    label: 'Account',
    stack: AccountStack,
    image: {
      active: <Account active />,
      inactive: <Account />
    }
  }
]);

export default { AppStack };

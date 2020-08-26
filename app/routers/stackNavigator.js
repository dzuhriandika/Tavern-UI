import { StackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Voucher from '../screens/Voucher';
import Account from '../screens/Account';
import OnBoarding from '../screens/OnBoarding';
import SplashScreen from '../screens/SplashScreen';
import Login from '../screens/Login';
import TopUp from '../screens/TopUp';
import Report from '../screens/Report';
import ListMenu from '../screens/ListMenu';
import CreateMenu from '../screens/CreateMenu';
import EditMeneu from '../screens/EditMenu';
import ForgotPassword from '../screens/ForgotPassword';
import About from '../screens/About';
import EditProfil from '../screens/EditProfil';
import AddVoucher from '../screens/AddVoucher';
import Verification from '../screens/Verification';
import Auth from '../screens/AuthFirstOpen';
import UpdateVoucher from '../screens/UpdateVoucher';


export const AddVoucherStack = StackNavigator(
  {
    AddVoucher: {
      screen: AddVoucher,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const UserAuthStack = StackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    ForgotPassword: {
      screen: ForgotPassword,
      navigationOptions: {
        tabBarVisible: false
      }
    },/*
    Verification: {
      screen: Verification,
      navigationOptions: {
        tabBarVisible: false
      }
    },*/
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false }, initialRouteName: 'Login' }
);

export const HomeStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarVisible: true
      }
    },
    ListMenu: {
      screen: ListMenu,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    CreateMenu: {
      screen: CreateMenu,
      navigationOptions : {
        tabBarVisible: false
      }
    },
    EditMenu: {
      screen: EditMeneu,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: true } }
  );
  
  export const TopUpStack = StackNavigator(
    {
      TopUp: {
        screen: TopUp,
        navigationOptions: {
          tabBarVisible: true
        }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const ReportStack = StackNavigator(
  {
    Report: {
      screen: Report,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const VoucherStack = StackNavigator(
  {
    Voucher: {
      screen: Voucher,
      navigationOptions: {
        tabBarVisible: true
      }
    },
    AddVoucher: {
      screen: AddVoucher,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    UpdateVoucher: {
      screen: UpdateVoucher,
      navigationOptions:{
        tabBarVisible:false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const AccountStack = StackNavigator(
  {
    Account: {
      screen: Account,
      navigationOptions: {
        tabBarVisible: true
      }
    },
    About: {
      screen: About,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    EditProfil: {
      screen: EditProfil,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const OnBoardingStack = StackNavigator(
  {
    OnBoarding: {
      screen: OnBoarding,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const SplashScreenStack = StackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      tabBarVisible: false
    }
  }
);

export const AuthStack = StackNavigator(
  {
    Auth: {
      screen: Auth,
      navigationOptions: {
        tabBarVisible: false
      }
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      tabBarVisible: false
    }
  }
)
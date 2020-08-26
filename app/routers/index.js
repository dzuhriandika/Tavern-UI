import { SwitchNavigator } from 'react-navigation';
import { AppStack } from './tabNavigator';
import { OnBoardingStack, UserAuthStack, AccountStack,SplashScreenStack, HomeStack, AuthStack } from './stackNavigator';

export default SwitchNavigator(
  {
    SplashScreen: SplashScreenStack,
    OnBoarding: OnBoardingStack,
    Auth: AuthStack,
    UserAuth: UserAuthStack,
    Account:AccountStack,
    Home:HomeStack,
    App: AppStack
  },
  {
    initialRouteName: 'SplashScreen',
  }
  
);


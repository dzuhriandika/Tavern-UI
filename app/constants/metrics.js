import { Dimensions, Platform, PixelRatio } from 'react-native';
import { COLOR_BASE_PRIMARY_MAIN } from '../styles';
import { scale  } from '../utils/scaling'

const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;

const screenShape = y / x < 1.5 ? 'square' : 'rectangle';
const iosDevice = x > 736 ? 'ipad' : 'iphone';

const ratioX =
  Platform.OS === 'ios'
    ? x <= 375
      ? x <= 320
        ? 0.6
        : 0.75
      : x > 414
        ? 1.2
        : 1
    : x <= 375
      ? x <= 320
        ? 0.5
        : 0.65
      : x > 414
        ? 1.1
        : 0.9;
const ratioY =
  Platform.OS === 'ios'
    ? y <= 568
      ? y <= 480
        ? 0.6
        : 0.75
      : y > 736
        ? 1.2
        : 1
    : y <= 568
      ? y <= 480
        ? 0.5
        : 0.65
      : y > 736
        ? 1.1
        : 0.9;

const metrics = {
  platform: Platform.OS,
  statusBar: {
    backgroundColor: COLOR_BASE_PRIMARY_MAIN,
    height: 21
  },
  pixelRatio: Platform.OS === 'ios' ? (x > 375 && x < 703 ? 2 : PixelRatio.get()) : PixelRatio.get() * 0.6,
  screenShape,
  iosDevice,
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: scale(12),
  doubleBaseMargin: scale(24),
  smallMargin: 5,
  medium: 7,
  doubleSection: 50,
  tripleSection: 75,
  doubleSection: scale(50),
  tripleSection: scale(75),
  horizontalLineHeight: 1,
  searchBarHeight: 30,
  doublesearchBarHeight: scale(60),
  fourthSection: scale(100),
  marginForgot: 35,
  marginForgot2: 15,
  skipBottom: 100,
  marginOnBoard: scale(65),
  mediumMargin: scale(20),
  //   screenWidth: x < y ? x : y,
  //   screenHeight: x < y ? y : x,
  screenWidth: x,
  screenHeight: y,
  ratioX,
  ratioY,
  navBarHeight: Platform.OS === 'ios' ? 64 : 54
};

export default metrics;

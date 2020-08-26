import { StyleSheet } from 'react-native';
import { black, white, blueSky } from '../../styles/colors';
import metrics from '../../constants/metrics';
import { scale } from '../../utils/scaling';

const styles = StyleSheet.create({
  header: {
    paddingLeft: metrics.baseMargin,
    backgroundColor: white,
    paddingTop: metrics.baseMargin
  },
  headerText: {
    fontWeight: 'bold',
    color: black
  },
  btnMenu: {
    color: blueSky,
    fontWeight: '500',
    marginEnd: scale(10)
  }
});

export default styles;

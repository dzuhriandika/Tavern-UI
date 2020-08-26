import { StyleSheet } from 'react-native';
import { scale } from '../../../utils/scaling';
import metrics from '../../../constants/metrics';

export default StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.2,
    shadowRadius: 6.27,
    elevation: 10,
    width: '100%',
    backgroundColor: 'white',
    padding: metrics.baseMargin,
    marginTop: metrics.baseMargin,
    borderRadius: 5,
    position: 'relative'
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  cardItem: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  cardImage: {
    position: 'absolute',
    bottom: scale(-40),
    right: scale(-40)
  }
});

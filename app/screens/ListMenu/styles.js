import { StyleSheet } from 'react-native';
import { white, black, blueSky, shadow, danger, transparent, grey } from '../../styles/colors';
import metrics from '../../constants/metrics';
import { scale } from '../../utils/scaling';

const styles = StyleSheet.create({
  header: {
    paddingLeft: metrics.baseMargin,
    backgroundColor: white,
    paddingTop: metrics.baseMargin
  },
  headerBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerText: {
    fontWeight: 'bold',
    color: black
  },
  btnAdd: {
    flex: 1,
    alignItems: 'flex-end'
  },
  menu: {
    paddingHorizontal: metrics.baseMargin,
    marginTop: metrics.baseMargin,
    paddingBottom: metrics.baseMargin
  },
  btnMenu: {
    color: blueSky,
    fontWeight: '500'
  },
  containerCard: {
    marginTop: metrics.baseMargin
  },
  wrapperCard: {
    flex: 1,
    flexDirection: 'row',
    marginTop: metrics.baseMargin,
    alignItems: 'center'
  },
  card: {
    flex: 12,
    flexDirection: 'row',
    shadowColor: shadow,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 3.1,
    elevation: 7,
    backgroundColor: white,
    padding: metrics.baseMargin,
    borderRadius: 10
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 7
  },
  btnStar: {
    flex: 1,
    alignItems: 'flex-end',
    paddingTop: metrics.baseMargin
  },
  wrapperContent: {
    paddingLeft: metrics.baseMargin,
    paddingRight: metrics.doubleBaseMargin + scale(10)
  },
  wrapperAction: {
    flex: 2,
    alignItems: 'flex-end',
    paddingLeft: metrics.baseMargin
  },
  title: {
    fontWeight: 'bold',
    color: black
  },
  editAction: {
    backgroundColor: blueSky,
    width: scale(36),
    height: scale(36),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  deleteAction: {
    backgroundColor: danger,
    width: scale(36),
    height: scale(36),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: scale(10)
  },
  textContent: {
    marginTop: scale(5),
    color: grey
  },
  modal: {
    flex: 1,
    width: '100%',
    backgroundColor: transparent,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardModal: {
    backgroundColor: white,
    width: '80%',
    padding: metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9
  },
  textDelete: {
    color: black,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: metrics.baseMargin
  },
  actionModal: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: metrics.baseMargin
  },
  cancelModal: {
    backgroundColor: blueSky,
    width: scale(121),
    height: scale(33),
    marginRight: scale(5),
    justifyContent: 'center',
    borderRadius: 6
  },
  yesModal: {
    backgroundColor: danger,
    width: scale(121),
    height: scale(33),
    marginLeft: scale(5),
    justifyContent: 'center',
    borderRadius: 6
  },
  imageDelete: {
    marginTop: metrics.baseMargin
  }
});

export default styles;

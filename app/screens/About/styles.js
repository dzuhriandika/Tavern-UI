import { StyleSheet } from 'react-native';
import { COLOR_PRIMARY_BLACK, FONT_SIZE_BODY1, FONT_SIZE_HEADLINE5 } from '../../styles';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  container: {
    paddingBottom: METRICS.doubleBaseMargin
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoWrap: {
    marginTop: METRICS.searchBarHeight,
    alignItems: 'center'
  },
  logo: {
    paddingVertical: METRICS.doubleSection
  },
  teksWrap: {
    marginTop: METRICS.searchBarHeight
  },
  teks: {
    fontSize: FONT_SIZE_BODY1,
    lineHeight: 20,
    color: COLOR_PRIMARY_BLACK
  },
  description: {
    marginHorizontal: METRICS.doubleBaseMargin,
    marginTop: METRICS.searchBarHeight
  },
  h2: {
    fontSize: FONT_SIZE_HEADLINE5,
    color: COLOR_PRIMARY_BLACK,
    fontWeight: '600',
    marginTop: METRICS.searchBarHeight
  },
  profilWrap: {
    flexDirection: 'row'
  },
  body: {
    marginTop: METRICS.smallMargin
  },
  name: {
    fontWeight: '500',
    color: COLOR_PRIMARY_BLACK,
    fontSize: FONT_SIZE_BODY1,
    marginTop: METRICS.smallMargin
  },
  passion: {
    fontSize: FONT_SIZE_BODY1
  }
});

export default styles;

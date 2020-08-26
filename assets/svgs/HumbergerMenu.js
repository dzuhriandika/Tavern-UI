import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { COLOR_WHITE } from '../../app/styles';

const SvgHumbergerMenu = props => (
  <Svg width={20} height={20} viewBox="0 0 124 124" {...props}>
    <Path
      fill={COLOR_WHITE}
      stroke={COLOR_WHITE}
      strokeWidth={0.7}
      d="M112 6H12C5.4 6 0 11.4 0 18s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12zm0 44H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12zm0 44H12c-6.6 0-12 5.4-12 12s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
    />
  </Svg>
);

export default SvgHumbergerMenu;

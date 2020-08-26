import React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgStar = props => (
  <Svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M6.75245 0.45197L5.05193 3.81369L1.24725 4.35451C0.564954 4.451 0.291516 5.27111 0.786308 5.74084L3.53891 8.35608L2.88787 12.0504C2.77068 12.7182 3.49204 13.2184 4.0962 12.9061L7.49985 11.1617L10.9035 12.9061C11.5077 13.2158 12.229 12.7182 12.1118 12.0504L11.4608 8.35608L14.2134 5.74084C14.7082 5.27111 14.4347 4.451 13.7525 4.35451L9.94777 3.81369L8.24725 0.45197C7.94256 -0.147249 7.05975 -0.154866 6.75245 0.45197Z"
      fill="#FFCF56"
    />
  </Svg>
);

export default SvgStar;

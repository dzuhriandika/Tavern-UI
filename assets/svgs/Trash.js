import React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const Trash = props => (
  <Svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M9.38911 11.5556C9.38911 12.35 8.73911 13 7.94466 13H2.16688C1.37244 13 0.72244 12.35 0.72244 11.5556V2.88889H9.38911V11.5556ZM0.000217438 0.722222H2.528L3.25022 0H6.86133L7.58355 0.722222H10.1113V2.16667H0.000217438V0.722222Z"
      fill="white"
    />
  </Svg>
);

export default Trash;

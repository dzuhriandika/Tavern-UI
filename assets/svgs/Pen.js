import React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const Pen = props => (
  <Svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M9.32433 2.4903L12.3747 5.54061L4.65341 13.2619L1.60479 10.2116L9.32433 2.4903ZM14.6893 1.75463L13.329 0.394292C12.8032 -0.131431 11.9496 -0.131431 11.4221 0.394292L10.119 1.69736L13.1693 4.7477L14.6893 3.22775C15.097 2.81997 15.097 2.16238 14.6893 1.75463ZM0.00848839 14.499C-0.047024 14.7489 0.178541 14.9727 0.428403 14.912L3.8275 14.0878L0.778885 11.0375L0.00848839 14.499Z"
      fill="white"
    />
  </Svg>
);

export default Pen;

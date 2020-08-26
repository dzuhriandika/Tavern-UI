import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { COLOR_BASE_PRIMARY_MAIN, COLOR_GREY } from '../../app/styles';

const SvgAccount = props => {
  // eslint-disable-next-line react/prop-types
  const color = props.active ? COLOR_BASE_PRIMARY_MAIN : COLOR_GREY;
  return (
    <Svg width="19" height="22" viewBox="0 0 19 22" fill={color} xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M14.4286 5.5C14.4286 8.26793 12.2162 10.5 9.5 10.5C6.78385 10.5 4.57143 8.26793 4.57143 5.5C4.57143 2.73207 6.78385 0.5 9.5 0.5C12.2162 0.5 14.4286 2.73207 14.4286 5.5ZM9.5 13.5625C10.6389 13.5625 11.7224 13.3137 12.7005 12.875H13.3C16.1646 12.875 18.5 15.2317 18.5 18.15V19.9375C18.5 20.8062 17.8059 21.5 16.9643 21.5H2.03571C1.19411 21.5 0.5 20.8062 0.5 19.9375V18.15C0.5 15.2317 2.83541 12.875 5.7 12.875H6.29986C7.28092 13.3134 8.36038 13.5625 9.5 13.5625Z"
        stroke={color}
      />
    </Svg>
  );
};

export default SvgAccount;

import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import { COLOR_BASE_PRIMARY_MAIN, COLOR_GREY, COLOR_WHITE } from '../../app/styles';

const TopUp = props => {
  // eslint-disable-next-line react/prop-types
  const color = props.active ? COLOR_BASE_PRIMARY_MAIN : COLOR_GREY;
  return (
    <Svg width="27" height="21" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Rect
        x="0.632812"
        y="1.38281"
        width="25.7344"
        height="18.9844"
        rx="1.47656"
        stroke={color}
        fill={color}
        stroke-width="1.26562"
      />
      <Path
        d="M9.95215 17.3173L15.0129 3.82203L16.5929 4.41455L11.5322 17.9098L9.95215 17.3173Z"
        fill={COLOR_WHITE}
      />
      <Path
        d="M9.28127 11.1591C7.88546 11.1591 6.75 10.0237 6.75 8.62785C6.75 7.23205 7.88546 6.09659 9.28127 6.09659C10.6771 6.09659 11.8125 7.23205 11.8125 8.62785C11.8125 10.0237 10.6771 11.1591 9.28127 11.1591ZM9.28127 7.7841C8.81573 7.7841 8.43751 8.16232 8.43751 8.62785C8.43751 9.09339 8.81573 9.47161 9.28127 9.47161C9.7468 9.47161 10.125 9.09339 10.125 8.62785C10.125 8.16232 9.7468 7.7841 9.28127 7.7841Z"
        fill={COLOR_WHITE}
      />
      <Path
        d="M18.0029 16.3919C16.6071 16.3919 15.4717 15.2565 15.4717 13.8607C15.4717 12.4649 16.6071 11.3294 18.0029 11.3294C19.3988 11.3294 20.5342 12.4649 20.5342 13.8607C20.5342 15.2565 19.3988 16.3919 18.0029 16.3919ZM18.0029 13.0169C17.5374 13.0169 17.1592 13.3951 17.1592 13.8607C17.1592 14.3262 17.5374 14.7044 18.0029 14.7044C18.4685 14.7044 18.8467 14.3262 18.8467 13.8607C18.8467 13.3951 18.4685 13.0169 18.0029 13.0169Z"
        fill={COLOR_WHITE}
      />
    </Svg>
  );
};

export default TopUp;

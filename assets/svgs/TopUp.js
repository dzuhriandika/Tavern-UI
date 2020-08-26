import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { COLOR_BASE_PRIMARY_MAIN, COLOR_GREY } from '../../app/styles';

const TopUp = props => {
  // eslint-disable-next-line react/prop-types
  const color = props.active ? COLOR_BASE_PRIMARY_MAIN : COLOR_GREY;
  return (
    <Svg width="28" height="20" viewBox="0 0 28 20" fill={color} xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M22.0825 0.5H22.0824C19.4628 0.499783 16.8312 1.1765 14.1248 1.87547L14.0921 1.88391C11.4204 2.57392 8.6748 3.28304 5.9171 3.28304C4.52168 3.28304 3.1182 3.1022 1.70972 2.64623C1.60755 2.61319 1.50726 2.59821 1.41092 2.59821C0.921543 2.59821 0.5 2.98142 0.5 3.5183V17.6817C0.5 18.0706 0.719069 18.4082 1.02065 18.5371L1.02108 18.5373C2.64623 19.2333 4.27591 19.5 5.9171 19.5C8.53675 19.5 11.1685 18.8232 13.875 18.1241L13.907 18.1159C16.579 17.4257 19.325 16.7165 22.0829 16.7165C23.4783 16.7165 24.8818 16.8974 26.2903 17.3533M22.0825 0.5L26.1363 17.829M22.0825 0.5C23.7237 0.5 25.3534 0.766748 26.9786 1.46235C27.2806 1.59161 27.4997 1.92919 27.5 2.31869M22.0825 0.5L28 2.3183M26.2903 17.3533L26.1363 17.829M26.2903 17.3533C26.2902 17.3533 26.2902 17.3533 26.2902 17.3533L26.1363 17.829M26.2903 17.3533C26.3924 17.3864 26.4927 17.4013 26.5891 17.4013C27.0785 17.4013 27.5 17.0181 27.5 16.4813V2.31869M26.1363 17.829C26.2881 17.8781 26.4403 17.9013 26.5891 17.9013C27.342 17.9013 28 17.3067 28 16.4813V2.3183M27.5 2.31869L28 2.3183M27.5 2.31869V2.3183H28M9.99984 10C9.99984 12.5432 11.7004 14.7857 13.9998 14.7857C16.2982 14.7857 17.9997 12.5442 17.9997 10C17.9997 7.45632 16.2987 5.21429 13.9998 5.21429C11.7009 5.21429 9.99984 7.45632 9.99984 10Z"
        stroke={color}
      />
    </Svg>
  );
};

export default TopUp;

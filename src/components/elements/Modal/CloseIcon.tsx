import React, { FunctionComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';

interface Props {
  height?: string;
  width?: string;
}

const CloseIcon: FunctionComponent<Props> = (props) => {
  const { height, width } = props;
  return (
    <Svg width={width} height={height} viewBox="0 0 18 18">
      <G
        fill="none"
        fillRule="evenodd"
        stroke="#8494a3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M1 16.754l7.877-7.877L1 1M16.877 1L9 8.877l7.877 7.877" />
      </G>
    </Svg>
  );
};

CloseIcon.defaultProps = {
  height: '18',
  width: '18',
};

export default CloseIcon;

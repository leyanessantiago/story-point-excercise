import React, { FunctionComponent } from 'react';

interface Props {
    className?: string;
    height?: string;
    width?: string;
}

const CloseIcon: FunctionComponent<Props> = (props) => {
  const { className, height, width } = props;
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 18 18">
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#8494a3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5">
        <path d="M1 16.754l7.877-7.877L1 1M16.877 1L9 8.877l7.877 7.877" />
      </g>
    </svg>
  );
};

CloseIcon.defaultProps = {
    height: '18',
    width: '18',
};

export default CloseIcon;

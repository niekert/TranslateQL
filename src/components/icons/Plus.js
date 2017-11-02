import React from 'react';
import { string } from 'prop-types';

function Plus({ fill, ...props }) {
  return (
    <svg height="24" width="24" fill={fill} viewBox="0 0 24 24" {...props}>
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
}

Plus.propTypes = {
  fill: string,
};

Plus.defaultProps = {
  fill: 'currentColor',
};

export default Plus;

import React, { FC, memo } from 'react';
import { IconProps } from './types';

export const MoonIcon: FC<IconProps> = memo(props => (
  <svg
    {...props}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width={props.width}
    height={props.height}
    viewBox="0 0 913.059 913.059"
  >
    <g>
      <path
        fill={props.color}
        /* eslint-disable-next-line max-len */
        d="M789.581,777.485c62.73-62.73,103.652-139.002,122.785-219.406c5.479-23.031-22.826-38.58-39.524-21.799 c-0.205,0.207-0.41,0.412-0.615,0.617c-139.57,139.57-367.531,136.879-503.693-8.072 c-128.37-136.658-126.685-348.817,3.673-483.579c1.644-1.699,3.3-3.378,4.97-5.037c16.744-16.635,1.094-44.811-21.869-39.354 c-79.689,18.938-155.326,59.276-217.75,121.035c-182.518,180.576-183.546,473.345-2.245,655.14 C315.821,958.032,608.883,958.182,789.581,777.485z"
      />
    </g>
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
  </svg>
));

MoonIcon.defaultProps = {
  width: 24,
  height: 24,
  color: '#f7f7f7',
};
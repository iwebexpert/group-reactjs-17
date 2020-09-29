import styled from 'styled-components';
import {
  space,
  layout,
  compose,
  color,
  flexbox,
  borders,
  position,
  typography,
  boxShadow,
} from 'styled-system';

import { BoxProps, TextProps, ImageProps } from './types';

export const BoxConstructor = styled.div<BoxProps>(
  compose(space, position, layout, flexbox, color, borders, typography, boxShadow),
);

export const BoxConstructorLink = styled.a<TextProps>(
  compose(typography, color, flexbox, position),
);

export const ImageConstructor = styled.img<ImageProps>(compose(layout, borders, flexbox, position));

export const TextConstructor = styled.p<TextProps>(compose(typography, color, flexbox, position));

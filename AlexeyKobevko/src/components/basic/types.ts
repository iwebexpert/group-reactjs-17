import {
  ColorProps,
  SpaceProps,
  LayoutProps,
  BordersProps,
  FlexboxProps,
  PositionProps,
  TypographyProps,
  BoxShadowProps,
} from 'styled-system';

interface GeneralProps extends FlexboxProps, PositionProps, ColorProps {
  cursor?: 'pointer' | 'default';
}

interface GeneralStringProps extends TypographyProps {
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
  textDecoration?: 'line-through' | 'overline' | 'underline';
  textDecorationColor?: string;
}

export interface BoxProps
  extends GeneralProps,
    LayoutProps,
    SpaceProps,
    BordersProps,
    BoxShadowProps {}
export type BoxType = SpaceProps &
  LayoutProps &
  FlexboxProps &
  BordersProps &
  PositionProps &
  TypographyProps &
  BoxShadowProps &
  Omit<ColorProps, 'color'>;

export interface ImageProps extends FlexboxProps, PositionProps, LayoutProps, BordersProps {}

export interface TextProps extends GeneralProps, GeneralStringProps {}

import styled, { css } from 'styled-components';
import { BoxConstructor } from '../systemConstructor';

export const Box = styled(BoxConstructor)`
  ${props => css`
    ${props.cursor && `cursor: ${props.cursor};`}
  `}
`;

Box.defaultProps = {
  width: '100%',
};

import styled, { css } from 'styled-components';
import { TextConstructor } from '../systemConstructor';

export const Text = styled(TextConstructor)`
  ${props => css`
    ${props.textTransform && `text-transform: ${props.textTransform};`}
    ${props.cursor && `cursor: ${props.cursor};`}
    ${props.textDecoration && `text-decoration: ${props.textDecoration};`}
    ${props.textDecorationColor && `text-decoration-color: ${props.textDecorationColor};`}
  `}
`;

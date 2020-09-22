import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

export const Button = ({ width, children, mt, ...props }) => (
  <$Button {...props} width={width} mt={mt}>
    {children}
  </$Button>
);

const $Button = styled.div.attrs({
  role: 'button',
})`
  ${({ mt, width, theme: { colors, indents } }) => css`
    margin-top: ${mt ?? ''};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${indents.i4};
    background: ${colors.blueMain};
    color: ${colors.otherWhite};
    width: ${width || 'fit-content'};
    height: 40px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    user-select: none;
    font-weight: bold;
    font-size: 14px;
    &:hover {
      background: ${colors.blueDark2};
    }
  `}
`;

Button.propTypes = {
  width: PropTypes.string,
  mt: PropTypes.string,
};

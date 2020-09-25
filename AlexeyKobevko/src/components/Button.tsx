import React, { FC, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  width?: string;
  mt?: string;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ width, children, onClick, mt, ...props }) => (
  <ToButton onClick={onClick} {...props} width={width} mt={mt}>
    {children}
  </ToButton>
);

const ToButton = styled.button<ButtonProps>`
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

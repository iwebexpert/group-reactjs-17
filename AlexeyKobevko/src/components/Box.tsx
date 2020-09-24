// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import { Data } from '../../types';

type IBox = Data.Indents;

export const Box: FC<IBox> = ({ children, ...props }) => <DIV {...props}>{children}</DIV>;

const DIV = styled.div<IBox>`
  ${({ m, mx, my, mt, mr, mb, ml, p, px, py, pt, pr, pb, pl }) => css`
    margin: ${m || ''};
    margin-top: ${my || mt || ''};
    margin-right: ${mx || mr || ''};
    margin-bottom: ${my || mb || ''};
    margin-left: ${mx || ml || ''};
    padding: ${p || ''};
    padding-top: ${py || pt || ''};
    padding-right: ${px || pr || ''};
    padding-bottom: ${py || pb || ''};
    padding-left: ${px || pl || ''};
  `}
`;

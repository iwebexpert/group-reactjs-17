import React, { FC } from 'react';
import styled from 'styled-components';

import { MoonIcon } from '@app/components/icons';
import { Box } from '@app/components/basic';

export const ModeButton: FC = ({ ...props }) => (
  <Box {...props} width="auto" borderRadius="50%" display="flex">
    <Icon />
  </Box>
);

const Icon = styled(MoonIcon)`
  transform: rotate(270deg);
  cursor: pointer;
  user-select: none;
`;

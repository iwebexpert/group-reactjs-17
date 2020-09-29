import React, { FC } from 'react';

import { BurgerLines, Hamburger, Inner } from './styled';

export const Burger: FC<{ checked: boolean; onClick: () => void }> = ({
  checked,
  onClick,
  ...props
}) => (
  <Hamburger {...props}>
    <Inner onClick={onClick} checked={checked}>
      <BurgerLines checked={checked} />
    </Inner>
  </Hamburger>
);

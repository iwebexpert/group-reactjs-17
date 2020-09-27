import styled from 'styled-components';

const transitionDefault = 'background-color .3s .3s';
const transitionAfterChecked = 'background-color .3s';
const pseudoTransDef = 'top .3s .3s,left .3s,transform .3s';
const pseudoTransChecked = 'top .3s,left .3s,transform .3s .3s';

export const BurgerLines = styled.div<{ checked: boolean }>`
  top: calc(50% - 1px);
  background-color: ${({ checked, theme: { colors } }) =>
    !checked ? colors.otherWhite : 'initial'};
  transition: ${({ checked }) => (!checked ? transitionDefault : transitionAfterChecked)};

  &,
  &:before,
  &:after {
    pointer-events: none;
    display: block;
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
  }
  &:before,
  &:after {
    background-color: ${({ theme: { colors } }) => colors.otherWhite};
    transition: ${({ checked }) => (!checked ? pseudoTransDef : pseudoTransChecked)};
  }
  &:before {
    right: 0;
    top: ${({ checked }) => (!checked ? '6px' : 0)};
    transform: ${({ checked }) => (!checked ? 'rotate(0)' : 'rotate(-45deg)')};
  }
  &:after {
    left: 0;
    top: ${({ checked }) => (!checked ? '-6px' : 0)};
    transform: ${({ checked }) => (!checked ? 'rotate(0)' : 'rotate(45deg)')};
  }
`;

export const Hamburger = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  position: relative;
  outline: none;
`;

export const Inner = styled.div<{ checked: boolean }>`
  width: 24px;
  height: 24px;
  font-size: 12px;
  position: relative;
`;

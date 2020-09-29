import React, { FC, useRef } from 'react';

import { Header } from '../Header';
import { LayoutBox, PageContent, PageLayoutBox, SectionBox, SidebarBox } from './styled';

const Layout: FC = ({ children }) => {
  const mode = localStorage.getItem('mode');
  if (!mode) {
    localStorage.setItem('mode', 'night');
  }
  const headerRef = useRef<HTMLDivElement>(null);
  return (
    <LayoutBox onClick={() => false}>
      <Header />
      <SectionBox>
        <PageLayoutBox ref={headerRef}>
          <SidebarBox>1</SidebarBox>
          <PageContent>{children}</PageContent>
        </PageLayoutBox>
      </SectionBox>
    </LayoutBox>
  );
};

export default Layout;

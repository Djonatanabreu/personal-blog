import { Fragment, ReactNode } from 'react';
import { MainNavigation } from '../mainNavigation/mainNavigation';

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{children}</main>
    </Fragment>
  );
};

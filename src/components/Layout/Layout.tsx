import { FC } from 'react';
import { Scrollbar } from '../../features/scrollbar';
import { Navbar } from '../Navbar';

interface LayoutProps {
  home?: boolean;
}

const Layout: FC<LayoutProps> = ({ children, home }) => {
  return (
    <Scrollbar>
      <Navbar />
      {home && <header></header>}
      <main>
        <>{children}</>
      </main>
    </Scrollbar>
  );
};

export default Layout;

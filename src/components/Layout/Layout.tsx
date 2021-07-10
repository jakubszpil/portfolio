import { FC } from 'react';
import { Scrollbar } from '../../features/scrollbar';

interface LayoutProps {
  home?: boolean;
}

const Layout: FC<LayoutProps> = ({ children, home }) => {
  return (
    <Scrollbar>
      {home && <header></header>}
      <main>
        <>{children}</>
      </main>
    </Scrollbar>
  );
};

export default Layout;

import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store as appStore } from '../app/store';

function render(
  ui,
  { preloadedState, store = appStore, ...renderOptions }: any = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };

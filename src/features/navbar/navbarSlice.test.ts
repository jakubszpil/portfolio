import { store } from '../../app/store';
import { collapseNavbar, expandNavbar, toggleNavbar } from './navbarSlice';

describe('Testing out navbar feature', () => {
  it('Correct toggling state', () => {
    let state = store.getState().navbar.expanded;
    expect(state).toBe(false);

    store.dispatch(toggleNavbar());
    state = store.getState().navbar.expanded;
    expect(state).toBe(true);

    store.dispatch(toggleNavbar());
    state = store.getState().navbar.expanded;
    expect(state).toBe(false);
  });

  it('Correct collapsing', () => {
    let state = store.getState().navbar.expanded;
    expect(state).toBe(false);

    store.dispatch(toggleNavbar());
    state = store.getState().navbar.expanded;
    expect(state).toBe(true);

    store.dispatch(collapseNavbar());
    state = store.getState().navbar.expanded;
    expect(state).toBe(false);
  });

  it('Correct expanding', () => {
    let state = store.getState().navbar.expanded;
    expect(state).toBe(false);

    store.dispatch(expandNavbar());
    state = store.getState().navbar.expanded;
    expect(state).toBe(true);
  });
});

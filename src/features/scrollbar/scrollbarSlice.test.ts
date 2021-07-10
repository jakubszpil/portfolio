import { store } from '../../app/store';
import { attachScrollbar, scrollScrollbar } from './scrollbarSlice';

describe('Testing out scrollbar feature', () => {
  it('Correct attaching scrollbar', () => {
    let state = store.getState().scrollbar.attached;
    expect(state).toBe(true);

    store.dispatch(attachScrollbar(false));
    state = store.getState().scrollbar.attached;
    expect(state).toBe(false);

    store.dispatch(attachScrollbar(true));
    state = store.getState().scrollbar.attached;
    expect(state).toBe(true);
  });

  it('Correct scrolling scrollbar', () => {
    let state = store.getState().scrollbar.scrolled;
    expect(state).toBe(false);

    store.dispatch(scrollScrollbar(true));
    state = store.getState().scrollbar.scrolled;
    expect(state).toBe(true);

    store.dispatch(scrollScrollbar(false));
    state = store.getState().scrollbar.scrolled;
    expect(state).toBe(false);
  });
});

import { store } from '../../app/store';
import { fireEvent, render } from '../../utils/testWithStore';
import Navbar from './Navbar';

describe('Testing out Navbar component', () => {
  it('Proper toggling navbar state', () => {
    const { container } = render(<Navbar />);

    const button = container.querySelector('button');

    fireEvent.click(button);

    let state = store.getState().navbar.expanded;

    expect(state).toBe(true);

    fireEvent.click(button);

    state = store.getState().navbar.expanded;

    expect(state).toBe(false);
  });
});

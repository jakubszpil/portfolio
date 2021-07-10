import { render } from '../../utils/testWithStore';
import Layout from './Layout';

describe('Testing out Layout component', () => {
  it('Proper child rendering', () => {
    const elementToRender = 'Hello';
    const { getByText } = render(
      <Layout>
        <h1>{elementToRender}</h1>
      </Layout>
    );
    expect(getByText(new RegExp(elementToRender, 'gi'))).toBeInTheDocument();
  });

  it('Rendering header element when `home` property is set to `true`', () => {
    const { container } = render(<Layout home>t</Layout>);
    expect(container.querySelector('header')).toBeInTheDocument();
  });
});

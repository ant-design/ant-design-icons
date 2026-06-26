import { TwitterOutlined } from '@ant-design/icons-svg';
import * as React from 'react';
import { render } from '@testing-library/react';
import Icon from '../src/components/IconBase';

describe('React AntdIcon Component', () => {
  it('should create SVG element.', () => {
    const props = {
      style: {
        fontSize: '3rem',
      },
      className: 'my-icon',
      extraProps: { hello: 'world' },
    } as any;
    const icon = render(<Icon {...props} />);

    expect(icon.container.innerHTML).toMatchSnapshot();
  });

  it('should allow explicit import.', () => {
    const icon = render(<Icon icon={TwitterOutlined} />);
    expect(typeof icon.container.querySelector('path')?.getAttribute('d')).toBe('string');
  });

  it('should render null, when the type is invalid.', () => {
    const iconWithObjectTypeProp = render(<Icon icon={{ invalid: true } as any} />);
    expect(iconWithObjectTypeProp.container.innerHTML).toBe('');

    const iconWithStringTypeProp = render(<Icon icon={'Later is better than never.' as any} />);
    expect(iconWithStringTypeProp.container.innerHTML).toBe('');
  });
});

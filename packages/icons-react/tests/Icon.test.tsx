import { TwitterOutlined } from '@ant-design/icons-svg';
import * as React from 'react';
import { mount } from 'enzyme';
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
    const icon = mount(
      <Icon {...props} />,
    );

    expect(icon).toMatchSnapshot();
  });

  it('should allow explicit import.', () => {
    const icon = mount(<Icon icon={TwitterOutlined} />);
    expect(typeof icon.find('path').first().prop('d')).toBe('string');
  });

  it('should render null, when the type is invalid.', () => {
    const iconWithObjectTypeProp = mount(<Icon icon={{ invalid: true } as any} />);
    expect(iconWithObjectTypeProp.isEmptyRender()).toBeTruthy();

    const iconWithStringTypeProp = mount(<Icon icon={'Later is better than never.' as any} />);
    expect(iconWithStringTypeProp.isEmptyRender()).toBeTruthy();
  });
});

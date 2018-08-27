import { AntDesign, Twitter } from '@ant-design/icons';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Icon, { IconProps } from '../src/components/Icon';

Icon.add(AntDesign, Twitter);

function mount(props: IconProps) {
  const component = renderer.create(<Icon {...props} />);
  return component.toJSON();
}

describe('React AntdIcon Component', () => {
  it('should create SVG element.', () => {
    const icon = mount({
      type: 'ant-design',
      style: {
        fontSize: '3rem'
      },
      className: 'my-icon'
    })!;

    expect(icon).toMatchSnapshot();
  });

  it('should allow explicit import.', () => {
    const icon = mount({
      type: Twitter
    });
    expect(typeof icon!.children![0].props.d).toBe('string');
  });

  it('should render null, when the type is invalid.', () => {
    const iconWithObjectTypeProp = mount({
      type: { invalid: true }
    } as any);

    expect(iconWithObjectTypeProp).toBeNull();

    const iconWithStringTypeProp = mount({
      type: 'Later is better than never.'
    });

    expect(iconWithStringTypeProp).toBeNull();
  });
});

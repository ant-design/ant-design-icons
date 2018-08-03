import { Alibaba, CiCircleFill } from '@ant-design/icons';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ReactAntdIcon, { AntdIconProps } from '../src/components/AntdIcon';

ReactAntdIcon.add(Alibaba, CiCircleFill);

function mount(props: AntdIconProps) {
  const component = renderer.create(<ReactAntdIcon {...props} />);
  return component.toJSON();
}

describe('React AntdIcon Component', () => {
  it('should create SVG element.', () => {
    const icon = mount({
      type: 'alibaba',
      style: {
        fontSize: '3rem'
      },
      className: 'my-icon'
    })!;

    expect(icon).toMatchSnapshot();
  });

  it('should convert "class" into "className".', () => {
    const icon = mount({
      type: 'ci-circle-fill'
    });
    expect(icon!.children![1].props.className).toBe('st0');
  });

  it('should allow explicit import.', () => {
    const icon = mount({
      type: CiCircleFill
    });
    expect(icon!.children![1].props.className).toBe('st0');
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

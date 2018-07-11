import { Alibaba, library } from 'antd-icons';
import assert = require('assert');
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ReactAntdIcon, { IAntdIconProps } from '../src/components/AntdIcon';

library.add(Alibaba);

function mount(props: IAntdIconProps) {
  const component = renderer.create(<ReactAntdIcon {...props} />);
  return component.toJSON();
}

describe('React AntdIcon Component', () => {
  it('should create SVG element.', () => {
    const vm = mount({
      type: 'alibaba',
      style: {
        fontSize: '3rem'
      },
      className: 'my-icon'
    })!;

    assert(vm.type === 'svg');
    assert(vm.props['data-icon'] === 'alibaba');
    assert(vm.props.className === 'my-icon');
    assert(vm.props.style.fontSize === '3rem');
    assert(vm.props.viewBox === `0 0 ${Alibaba.width} ${Alibaba.height}`);
  });
});

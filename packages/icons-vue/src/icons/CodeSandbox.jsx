
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CodeSandboxOutlineSvg from '@ant-design/icons-svg/lib/outline/CodeSandboxOutline';

export default {
  name: 'IconCodeSandbox',
  displayName: 'CodeSandbox',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CodeSandboxOutlineSvg } },
      children
    ),
};

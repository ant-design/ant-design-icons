
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CodeSandboxSquareFillSvg from '@ant-design/icons-svg/lib/fill/CodeSandboxSquareFill';

export default {
  name: 'CodeSandboxSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CodeSandboxSquareFillSvg } },
      children
    ),
};

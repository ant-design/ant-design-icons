
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CodeSandboxCircleFillSvg from '@ant-design/icons-svg/lib/fill/CodeSandboxCircleFill';

export default {
  name: 'CodeSandboxCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CodeSandboxCircleFillSvg } },
      children
    ),
};

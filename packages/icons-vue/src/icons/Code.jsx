
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CodeOutlineSvg from '@ant-design/icons-svg/lib/outline/CodeOutline';

export default {
  name: 'IconCode',
  displayName: 'Code',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CodeOutlineSvg } },
      children
    ),
};

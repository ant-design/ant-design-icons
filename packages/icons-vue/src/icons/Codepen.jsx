
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CodepenOutlineSvg from '@ant-design/icons-svg/lib/outline/CodepenOutline';

export default {
  name: 'IconCodepen',
  displayName: 'Codepen',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CodepenOutlineSvg } },
      children
    ),
};


// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ScissorOutlineSvg from '@ant-design/icons-svg/lib/outline/ScissorOutline';

export default {
  name: 'IconScissor',
  displayName: 'Scissor',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ScissorOutlineSvg } },
      children
    ),
};

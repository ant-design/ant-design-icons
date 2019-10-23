
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BellOutlineSvg from '@ant-design/icons-svg/lib/outline/BellOutline';

export default {
  name: 'IconBell',
  displayName: 'Bell',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BellOutlineSvg } },
      children
    ),
};

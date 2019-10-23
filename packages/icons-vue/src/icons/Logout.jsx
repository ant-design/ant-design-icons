
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import LogoutOutlineSvg from '@ant-design/icons-svg/lib/outline/LogoutOutline';

export default {
  name: 'IconLogout',
  displayName: 'Logout',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LogoutOutlineSvg } },
      children
    ),
};

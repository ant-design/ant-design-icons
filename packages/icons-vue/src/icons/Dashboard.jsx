
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DashboardOutlineSvg from '@ant-design/icons-svg/lib/outline/DashboardOutline';

export default {
  name: 'IconDashboard',
  displayName: 'Dashboard',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DashboardOutlineSvg } },
      children
    ),
};

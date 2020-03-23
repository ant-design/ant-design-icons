// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DashboardOutlinedSvg from '@ant-design/icons-svg/lib/asn/DashboardOutlined';

export default {
  name: 'IconDashboardOutlined',
  displayName: 'DashboardOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DashboardOutlinedSvg } },
      children,
    ),
};
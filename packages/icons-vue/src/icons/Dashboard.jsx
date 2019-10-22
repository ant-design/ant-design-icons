// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import DashboardSvg from '@ant-design/icons-svg/lib/asn/DashboardOutlined'

export default {
  name: 'Dashboard',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DashboardSvg } },
      children
    )
};
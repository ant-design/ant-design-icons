// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import DashboardTwoToneSvg from '@ant-design/icons-svg/lib/asn/DashboardTwoTone'

export default {
  name: 'DashboardTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DashboardTwoToneSvg } },
      children
    )
};
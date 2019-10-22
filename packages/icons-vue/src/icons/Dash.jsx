// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import DashSvg from '@ant-design/icons-svg/lib/asn/DashOutlined'

export default {
  name: 'Dash',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DashSvg } },
      children
    )
};
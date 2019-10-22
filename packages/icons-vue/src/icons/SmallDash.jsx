// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import SmallDashSvg from '@ant-design/icons-svg/lib/asn/SmallDashOutlined'

export default {
  name: 'SmallDash',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SmallDashSvg } },
      children
    )
};
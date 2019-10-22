// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import GatewaySvg from '@ant-design/icons-svg/lib/asn/GatewayOutlined'

export default {
  name: 'Gateway',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: GatewaySvg } },
      children
    )
};
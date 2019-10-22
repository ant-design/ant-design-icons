// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import DisconnectSvg from '@ant-design/icons-svg/lib/asn/DisconnectOutlined'

export default {
  name: 'Disconnect',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DisconnectSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import WifiSvg from '@ant-design/icons-svg/lib/asn/WifiOutlined'

export default {
  name: 'Wifi',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: WifiSvg } },
      children
    )
};
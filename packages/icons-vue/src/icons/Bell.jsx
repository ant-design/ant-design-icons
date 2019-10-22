// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import BellSvg from '@ant-design/icons-svg/lib/asn/BellOutlined'

export default {
  name: 'Bell',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BellSvg } },
      children
    )
};
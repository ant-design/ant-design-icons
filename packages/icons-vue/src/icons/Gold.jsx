// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import GoldSvg from '@ant-design/icons-svg/lib/asn/GoldOutlined'

export default {
  name: 'Gold',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: GoldSvg } },
      children
    )
};
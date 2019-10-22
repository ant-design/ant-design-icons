// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import SwapLeftSvg from '@ant-design/icons-svg/lib/asn/SwapLeftOutlined'

export default {
  name: 'SwapLeft',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SwapLeftSvg } },
      children
    )
};
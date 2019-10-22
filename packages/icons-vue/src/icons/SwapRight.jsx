// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import SwapRightSvg from '@ant-design/icons-svg/lib/asn/SwapRightOutlined'

export default {
  name: 'SwapRight',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SwapRightSvg } },
      children
    )
};
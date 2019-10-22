// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import TrademarkCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/TrademarkCircleTwoTone'

export default {
  name: 'TrademarkCircleTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TrademarkCircleTwoToneSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import TrademarkCircleFilledSvg from '@ant-design/icons-svg/lib/asn/TrademarkCircleFilled'

export default {
  name: 'TrademarkCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TrademarkCircleFilledSvg } },
      children
    )
};
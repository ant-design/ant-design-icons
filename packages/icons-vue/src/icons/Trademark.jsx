// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import TrademarkSvg from '@ant-design/icons-svg/lib/asn/TrademarkOutlined'

export default {
  name: 'Trademark',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TrademarkSvg } },
      children
    )
};
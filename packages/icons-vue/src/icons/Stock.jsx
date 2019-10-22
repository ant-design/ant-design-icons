// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import StockSvg from '@ant-design/icons-svg/lib/asn/StockOutlined'

export default {
  name: 'Stock',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: StockSvg } },
      children
    )
};
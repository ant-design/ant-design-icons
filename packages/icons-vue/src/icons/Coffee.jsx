// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CoffeeSvg from '@ant-design/icons-svg/lib/asn/CoffeeOutlined'

export default {
  name: 'Coffee',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CoffeeSvg } },
      children
    )
};
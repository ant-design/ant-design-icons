// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ShoppingSvg from '@ant-design/icons-svg/lib/asn/ShoppingOutlined'

export default {
  name: 'Shopping',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ShoppingSvg } },
      children
    )
};
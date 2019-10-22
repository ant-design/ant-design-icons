// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ShoppingCartSvg from '@ant-design/icons-svg/lib/asn/ShoppingCartOutlined'

export default {
  name: 'ShoppingCart',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ShoppingCartSvg } },
      children
    )
};
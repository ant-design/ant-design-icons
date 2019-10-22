// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ShoppingFilledSvg from '@ant-design/icons-svg/lib/asn/ShoppingFilled'

export default {
  name: 'ShoppingFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ShoppingFilledSvg } },
      children
    )
};
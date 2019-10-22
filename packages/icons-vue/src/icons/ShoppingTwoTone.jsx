// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ShoppingTwoToneSvg from '@ant-design/icons-svg/lib/asn/ShoppingTwoTone'

export default {
  name: 'ShoppingTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ShoppingTwoToneSvg } },
      children
    )
};
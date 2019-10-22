// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ShopTwoToneSvg from '@ant-design/icons-svg/lib/asn/ShopTwoTone'

export default {
  name: 'ShopTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ShopTwoToneSvg } },
      children
    )
};
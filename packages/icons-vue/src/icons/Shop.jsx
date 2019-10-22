// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ShopSvg from '@ant-design/icons-svg/lib/asn/ShopOutlined'

export default {
  name: 'Shop',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ShopSvg } },
      children
    )
};
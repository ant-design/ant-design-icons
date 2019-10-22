// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import LaptopSvg from '@ant-design/icons-svg/lib/asn/LaptopOutlined'

export default {
  name: 'Laptop',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LaptopSvg } },
      children
    )
};
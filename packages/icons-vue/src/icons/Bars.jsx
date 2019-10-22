// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import BarsSvg from '@ant-design/icons-svg/lib/asn/BarsOutlined'

export default {
  name: 'Bars',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BarsSvg } },
      children
    )
};
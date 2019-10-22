// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FireSvg from '@ant-design/icons-svg/lib/asn/FireOutlined'

export default {
  name: 'Fire',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FireSvg } },
      children
    )
};
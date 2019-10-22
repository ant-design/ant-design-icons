// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import DollarTwoToneSvg from '@ant-design/icons-svg/lib/asn/DollarTwoTone'

export default {
  name: 'DollarTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DollarTwoToneSvg } },
      children
    )
};
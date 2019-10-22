// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CalculatorTwoToneSvg from '@ant-design/icons-svg/lib/asn/CalculatorTwoTone'

export default {
  name: 'CalculatorTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CalculatorTwoToneSvg } },
      children
    )
};
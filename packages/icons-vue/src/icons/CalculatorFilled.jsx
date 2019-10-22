// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CalculatorFilledSvg from '@ant-design/icons-svg/lib/asn/CalculatorFilled'

export default {
  name: 'CalculatorFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CalculatorFilledSvg } },
      children
    )
};
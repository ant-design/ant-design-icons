// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CalculatorSvg from '@ant-design/icons-svg/lib/asn/CalculatorOutlined'

export default {
  name: 'Calculator',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CalculatorSvg } },
      children
    )
};
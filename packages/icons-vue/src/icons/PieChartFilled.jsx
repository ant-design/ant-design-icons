// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import PieChartFilledSvg from '@ant-design/icons-svg/lib/asn/PieChartFilled'

export default {
  name: 'PieChartFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PieChartFilledSvg } },
      children
    )
};
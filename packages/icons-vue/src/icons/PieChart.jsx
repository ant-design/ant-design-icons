// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import PieChartSvg from '@ant-design/icons-svg/lib/asn/PieChartOutlined'

export default {
  name: 'PieChart',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PieChartSvg } },
      children
    )
};
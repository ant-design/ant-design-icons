// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import LineChartSvg from '@ant-design/icons-svg/lib/asn/LineChartOutlined'

export default {
  name: 'LineChart',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LineChartSvg } },
      children
    )
};
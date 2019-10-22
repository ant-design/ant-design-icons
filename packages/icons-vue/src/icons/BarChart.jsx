// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import BarChartSvg from '@ant-design/icons-svg/lib/asn/BarChartOutlined'

export default {
  name: 'BarChart',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BarChartSvg } },
      children
    )
};
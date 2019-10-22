// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import AreaChartSvg from '@ant-design/icons-svg/lib/asn/AreaChartOutlined'

export default {
  name: 'AreaChart',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AreaChartSvg } },
      children
    )
};
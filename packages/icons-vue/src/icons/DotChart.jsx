// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import DotChartSvg from '@ant-design/icons-svg/lib/asn/DotChartOutlined'

export default {
  name: 'DotChart',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DotChartSvg } },
      children
    )
};
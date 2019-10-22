// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FunnelPlotSvg from '@ant-design/icons-svg/lib/asn/FunnelPlotOutlined'

export default {
  name: 'FunnelPlot',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FunnelPlotSvg } },
      children
    )
};
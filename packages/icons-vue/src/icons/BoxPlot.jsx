// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import BoxPlotSvg from '@ant-design/icons-svg/lib/asn/BoxPlotOutlined'

export default {
  name: 'BoxPlot',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BoxPlotSvg } },
      children
    )
};
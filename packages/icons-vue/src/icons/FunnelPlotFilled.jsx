// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FunnelPlotFilledSvg from '@ant-design/icons-svg/lib/asn/FunnelPlotFilled'

export default {
  name: 'FunnelPlotFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FunnelPlotFilledSvg } },
      children
    )
};
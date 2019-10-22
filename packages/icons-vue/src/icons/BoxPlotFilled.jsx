// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import BoxPlotFilledSvg from '@ant-design/icons-svg/lib/asn/BoxPlotFilled'

export default {
  name: 'BoxPlotFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BoxPlotFilledSvg } },
      children
    )
};
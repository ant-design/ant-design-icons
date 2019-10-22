// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import HourglassFilledSvg from '@ant-design/icons-svg/lib/asn/HourglassFilled'

export default {
  name: 'HourglassFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: HourglassFilledSvg } },
      children
    )
};
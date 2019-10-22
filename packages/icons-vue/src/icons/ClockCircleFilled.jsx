// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ClockCircleFilledSvg from '@ant-design/icons-svg/lib/asn/ClockCircleFilled'

export default {
  name: 'ClockCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ClockCircleFilledSvg } },
      children
    )
};
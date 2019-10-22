// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ClockCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/ClockCircleTwoTone'

export default {
  name: 'ClockCircleTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ClockCircleTwoToneSvg } },
      children
    )
};
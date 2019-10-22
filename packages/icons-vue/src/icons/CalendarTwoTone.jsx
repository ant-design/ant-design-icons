// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CalendarTwoToneSvg from '@ant-design/icons-svg/lib/asn/CalendarTwoTone'

export default {
  name: 'CalendarTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CalendarTwoToneSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CalendarFilledSvg from '@ant-design/icons-svg/lib/asn/CalendarFilled'

export default {
  name: 'CalendarFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CalendarFilledSvg } },
      children
    )
};
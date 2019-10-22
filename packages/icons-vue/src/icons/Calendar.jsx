// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CalendarSvg from '@ant-design/icons-svg/lib/asn/CalendarOutlined'

export default {
  name: 'Calendar',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CalendarSvg } },
      children
    )
};
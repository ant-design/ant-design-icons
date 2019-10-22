// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ScheduleFilledSvg from '@ant-design/icons-svg/lib/asn/ScheduleFilled'

export default {
  name: 'ScheduleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ScheduleFilledSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ScheduleTwoToneSvg from '@ant-design/icons-svg/lib/asn/ScheduleTwoTone'

export default {
  name: 'ScheduleTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ScheduleTwoToneSvg } },
      children
    )
};
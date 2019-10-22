// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CompassTwoToneSvg from '@ant-design/icons-svg/lib/asn/CompassTwoTone'

export default {
  name: 'CompassTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CompassTwoToneSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CarryOutTwoToneSvg from '@ant-design/icons-svg/lib/asn/CarryOutTwoTone'

export default {
  name: 'CarryOutTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CarryOutTwoToneSvg } },
      children
    )
};
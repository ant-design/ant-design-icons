// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CarTwoToneSvg from '@ant-design/icons-svg/lib/asn/CarTwoTone'

export default {
  name: 'CarTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CarTwoToneSvg } },
      children
    )
};
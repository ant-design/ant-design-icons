// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import PropertySafetyTwoToneSvg from '@ant-design/icons-svg/lib/asn/PropertySafetyTwoTone'

export default {
  name: 'PropertySafetyTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PropertySafetyTwoToneSvg } },
      children
    )
};
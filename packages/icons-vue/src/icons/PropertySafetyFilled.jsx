// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import PropertySafetyFilledSvg from '@ant-design/icons-svg/lib/asn/PropertySafetyFilled'

export default {
  name: 'PropertySafetyFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PropertySafetyFilledSvg } },
      children
    )
};
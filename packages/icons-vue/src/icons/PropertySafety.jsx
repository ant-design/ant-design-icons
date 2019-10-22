// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import PropertySafetySvg from '@ant-design/icons-svg/lib/asn/PropertySafetyOutlined'

export default {
  name: 'PropertySafety',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PropertySafetySvg } },
      children
    )
};
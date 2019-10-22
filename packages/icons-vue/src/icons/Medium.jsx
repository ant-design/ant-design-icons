// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import MediumSvg from '@ant-design/icons-svg/lib/asn/MediumOutlined'

export default {
  name: 'Medium',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MediumSvg } },
      children
    )
};
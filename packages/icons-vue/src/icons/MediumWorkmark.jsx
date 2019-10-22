// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import MediumWorkmarkSvg from '@ant-design/icons-svg/lib/asn/MediumWorkmarkOutlined'

export default {
  name: 'MediumWorkmark',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MediumWorkmarkSvg } },
      children
    )
};
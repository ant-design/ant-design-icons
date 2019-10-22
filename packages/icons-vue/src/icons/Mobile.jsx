// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import MobileSvg from '@ant-design/icons-svg/lib/asn/MobileOutlined'

export default {
  name: 'Mobile',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MobileSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import AppleSvg from '@ant-design/icons-svg/lib/asn/AppleOutlined'

export default {
  name: 'Apple',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AppleSvg } },
      children
    )
};
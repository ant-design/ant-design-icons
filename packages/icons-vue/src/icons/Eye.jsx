// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import EyeSvg from '@ant-design/icons-svg/lib/asn/EyeOutlined'

export default {
  name: 'Eye',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: EyeSvg } },
      children
    )
};
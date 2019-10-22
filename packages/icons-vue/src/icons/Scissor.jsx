// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ScissorSvg from '@ant-design/icons-svg/lib/asn/ScissorOutlined'

export default {
  name: 'Scissor',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ScissorSvg } },
      children
    )
};
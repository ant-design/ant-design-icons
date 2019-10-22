// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import RocketSvg from '@ant-design/icons-svg/lib/asn/RocketOutlined'

export default {
  name: 'Rocket',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RocketSvg } },
      children
    )
};
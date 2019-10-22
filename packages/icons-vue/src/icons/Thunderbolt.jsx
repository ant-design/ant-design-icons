// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ThunderboltSvg from '@ant-design/icons-svg/lib/asn/ThunderboltOutlined'

export default {
  name: 'Thunderbolt',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ThunderboltSvg } },
      children
    )
};
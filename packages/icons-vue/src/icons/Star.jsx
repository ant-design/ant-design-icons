// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import StarSvg from '@ant-design/icons-svg/lib/asn/StarOutlined'

export default {
  name: 'Star',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: StarSvg } },
      children
    )
};
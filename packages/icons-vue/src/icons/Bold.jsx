// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import BoldSvg from '@ant-design/icons-svg/lib/asn/BoldOutlined'

export default {
  name: 'Bold',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BoldSvg } },
      children
    )
};
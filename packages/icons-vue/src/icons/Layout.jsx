// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import LayoutSvg from '@ant-design/icons-svg/lib/asn/LayoutOutlined'

export default {
  name: 'Layout',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LayoutSvg } },
      children
    )
};
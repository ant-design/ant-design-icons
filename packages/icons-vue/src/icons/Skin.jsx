// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import SkinSvg from '@ant-design/icons-svg/lib/asn/SkinOutlined'

export default {
  name: 'Skin',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SkinSvg } },
      children
    )
};
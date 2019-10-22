// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import SkinFilledSvg from '@ant-design/icons-svg/lib/asn/SkinFilled'

export default {
  name: 'SkinFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SkinFilledSvg } },
      children
    )
};
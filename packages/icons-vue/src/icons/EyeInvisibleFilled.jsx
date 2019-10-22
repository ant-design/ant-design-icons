// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import EyeInvisibleFilledSvg from '@ant-design/icons-svg/lib/asn/EyeInvisibleFilled'

export default {
  name: 'EyeInvisibleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: EyeInvisibleFilledSvg } },
      children
    )
};
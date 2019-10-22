// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import EyeFilledSvg from '@ant-design/icons-svg/lib/asn/EyeFilled'

export default {
  name: 'EyeFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: EyeFilledSvg } },
      children
    )
};
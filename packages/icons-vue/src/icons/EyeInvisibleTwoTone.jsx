// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import EyeInvisibleTwoToneSvg from '@ant-design/icons-svg/lib/asn/EyeInvisibleTwoTone'

export default {
  name: 'EyeInvisibleTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: EyeInvisibleTwoToneSvg } },
      children
    )
};
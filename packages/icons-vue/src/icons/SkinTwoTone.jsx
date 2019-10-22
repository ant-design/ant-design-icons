// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import SkinTwoToneSvg from '@ant-design/icons-svg/lib/asn/SkinTwoTone'

export default {
  name: 'SkinTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SkinTwoToneSvg } },
      children
    )
};
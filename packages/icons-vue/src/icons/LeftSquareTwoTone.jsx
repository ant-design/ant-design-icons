// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import LeftSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/LeftSquareTwoTone'

export default {
  name: 'LeftSquareTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LeftSquareTwoToneSvg } },
      children
    )
};
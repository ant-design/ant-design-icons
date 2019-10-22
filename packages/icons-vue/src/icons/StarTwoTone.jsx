// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import StarTwoToneSvg from '@ant-design/icons-svg/lib/asn/StarTwoTone'

export default {
  name: 'StarTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: StarTwoToneSvg } },
      children
    )
};
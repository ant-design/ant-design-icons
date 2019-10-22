// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import PlaySquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/PlaySquareTwoTone'

export default {
  name: 'PlaySquareTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PlaySquareTwoToneSvg } },
      children
    )
};
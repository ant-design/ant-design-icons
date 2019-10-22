// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import PlayCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/PlayCircleTwoTone'

export default {
  name: 'PlayCircleTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PlayCircleTwoToneSvg } },
      children
    )
};
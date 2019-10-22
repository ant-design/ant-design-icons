// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import AudioTwoToneSvg from '@ant-design/icons-svg/lib/asn/AudioTwoTone'

export default {
  name: 'AudioTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AudioTwoToneSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import AudioFilledSvg from '@ant-design/icons-svg/lib/asn/AudioFilled'

export default {
  name: 'AudioFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AudioFilledSvg } },
      children
    )
};
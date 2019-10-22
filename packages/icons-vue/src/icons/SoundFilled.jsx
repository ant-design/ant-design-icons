// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import SoundFilledSvg from '@ant-design/icons-svg/lib/asn/SoundFilled'

export default {
  name: 'SoundFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SoundFilledSvg } },
      children
    )
};
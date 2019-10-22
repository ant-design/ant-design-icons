// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import SoundSvg from '@ant-design/icons-svg/lib/asn/SoundOutlined'

export default {
  name: 'Sound',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SoundSvg } },
      children
    )
};
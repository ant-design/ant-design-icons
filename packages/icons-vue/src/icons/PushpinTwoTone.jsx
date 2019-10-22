// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import PushpinTwoToneSvg from '@ant-design/icons-svg/lib/asn/PushpinTwoTone'

export default {
  name: 'PushpinTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PushpinTwoToneSvg } },
      children
    )
};
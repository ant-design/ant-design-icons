// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import GiftTwoToneSvg from '@ant-design/icons-svg/lib/asn/GiftTwoTone'

export default {
  name: 'GiftTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: GiftTwoToneSvg } },
      children
    )
};
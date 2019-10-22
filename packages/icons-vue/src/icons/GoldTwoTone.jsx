// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import GoldTwoToneSvg from '@ant-design/icons-svg/lib/asn/GoldTwoTone'

export default {
  name: 'GoldTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: GoldTwoToneSvg } },
      children
    )
};
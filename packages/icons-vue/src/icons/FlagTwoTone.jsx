// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FlagTwoToneSvg from '@ant-design/icons-svg/lib/asn/FlagTwoTone'

export default {
  name: 'FlagTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FlagTwoToneSvg } },
      children
    )
};
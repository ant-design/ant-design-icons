// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import TrophyTwoToneSvg from '@ant-design/icons-svg/lib/asn/TrophyTwoTone'

export default {
  name: 'TrophyTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TrophyTwoToneSvg } },
      children
    )
};
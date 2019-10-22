// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import TrophyFilledSvg from '@ant-design/icons-svg/lib/asn/TrophyFilled'

export default {
  name: 'TrophyFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TrophyFilledSvg } },
      children
    )
};
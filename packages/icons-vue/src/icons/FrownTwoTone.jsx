// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FrownTwoToneSvg from '@ant-design/icons-svg/lib/asn/FrownTwoTone'

export default {
  name: 'FrownTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FrownTwoToneSvg } },
      children
    )
};
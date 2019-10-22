// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CrownTwoToneSvg from '@ant-design/icons-svg/lib/asn/CrownTwoTone'

export default {
  name: 'CrownTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CrownTwoToneSvg } },
      children
    )
};
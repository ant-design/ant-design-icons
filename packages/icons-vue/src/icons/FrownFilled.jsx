// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FrownFilledSvg from '@ant-design/icons-svg/lib/asn/FrownFilled'

export default {
  name: 'FrownFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FrownFilledSvg } },
      children
    )
};
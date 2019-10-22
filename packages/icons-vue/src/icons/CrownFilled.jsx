// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CrownFilledSvg from '@ant-design/icons-svg/lib/asn/CrownFilled'

export default {
  name: 'CrownFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CrownFilledSvg } },
      children
    )
};
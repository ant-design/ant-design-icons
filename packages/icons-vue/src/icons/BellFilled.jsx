// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import BellFilledSvg from '@ant-design/icons-svg/lib/asn/BellFilled'

export default {
  name: 'BellFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BellFilledSvg } },
      children
    )
};
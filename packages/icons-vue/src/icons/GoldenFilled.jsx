// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import GoldenFilledSvg from '@ant-design/icons-svg/lib/asn/GoldenFilled'

export default {
  name: 'GoldenFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: GoldenFilledSvg } },
      children
    )
};
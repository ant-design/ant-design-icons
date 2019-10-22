// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FundFilledSvg from '@ant-design/icons-svg/lib/asn/FundFilled'

export default {
  name: 'FundFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FundFilledSvg } },
      children
    )
};
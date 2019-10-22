// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CreditCardFilledSvg from '@ant-design/icons-svg/lib/asn/CreditCardFilled'

export default {
  name: 'CreditCardFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CreditCardFilledSvg } },
      children
    )
};
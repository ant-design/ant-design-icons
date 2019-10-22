// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CreditCardTwoToneSvg from '@ant-design/icons-svg/lib/asn/CreditCardTwoTone'

export default {
  name: 'CreditCardTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CreditCardTwoToneSvg } },
      children
    )
};
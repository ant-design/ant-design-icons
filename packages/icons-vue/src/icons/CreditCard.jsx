// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CreditCardSvg from '@ant-design/icons-svg/lib/asn/CreditCardOutlined'

export default {
  name: 'CreditCard',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CreditCardSvg } },
      children
    )
};
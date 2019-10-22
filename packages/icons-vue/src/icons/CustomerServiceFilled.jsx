// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CustomerServiceFilledSvg from '@ant-design/icons-svg/lib/asn/CustomerServiceFilled'

export default {
  name: 'CustomerServiceFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CustomerServiceFilledSvg } },
      children
    )
};
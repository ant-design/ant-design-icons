// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CustomerServiceTwoToneSvg from '@ant-design/icons-svg/lib/asn/CustomerServiceTwoTone'

export default {
  name: 'CustomerServiceTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CustomerServiceTwoToneSvg } },
      children
    )
};
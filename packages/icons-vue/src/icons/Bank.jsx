// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import BankSvg from '@ant-design/icons-svg/lib/asn/BankOutlined'

export default {
  name: 'Bank',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BankSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import BankFilledSvg from '@ant-design/icons-svg/lib/asn/BankFilled'

export default {
  name: 'BankFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BankFilledSvg } },
      children
    )
};
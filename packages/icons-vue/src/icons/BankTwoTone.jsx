// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import BankTwoToneSvg from '@ant-design/icons-svg/lib/asn/BankTwoTone'

export default {
  name: 'BankTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BankTwoToneSvg } },
      children
    )
};
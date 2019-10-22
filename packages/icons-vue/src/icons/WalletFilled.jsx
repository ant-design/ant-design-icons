// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import WalletFilledSvg from '@ant-design/icons-svg/lib/asn/WalletFilled'

export default {
  name: 'WalletFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: WalletFilledSvg } },
      children
    )
};
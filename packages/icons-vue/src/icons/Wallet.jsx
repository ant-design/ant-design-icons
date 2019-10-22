// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import WalletSvg from '@ant-design/icons-svg/lib/asn/WalletOutlined'

export default {
  name: 'Wallet',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: WalletSvg } },
      children
    )
};
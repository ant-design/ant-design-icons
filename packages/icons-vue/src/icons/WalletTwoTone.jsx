// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import WalletTwoToneSvg from '@ant-design/icons-svg/lib/asn/WalletTwoTone'

export default {
  name: 'WalletTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: WalletTwoToneSvg } },
      children
    )
};
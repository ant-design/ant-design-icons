// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import WalletTwoToneSvg from '@ant-design/icons-svg/lib/asn/WalletTwoTone';

export default {
  name: 'IconWalletTwoTone',
  displayName: 'WalletTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: WalletTwoToneSvg } },
      children,
    ),
};
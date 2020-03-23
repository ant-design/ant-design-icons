// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import WalletFilledSvg from '@ant-design/icons-svg/lib/asn/WalletFilled';

export default {
  name: 'IconWalletFilled',
  displayName: 'WalletFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: WalletFilledSvg } },
      children,
    ),
};
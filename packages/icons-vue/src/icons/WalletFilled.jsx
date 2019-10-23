
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import WalletFillSvg from '@ant-design/icons-svg/lib/fill/WalletFill';

export default {
  name: 'IconWalletFilled',
  displayName: 'WalletFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: WalletFillSvg } },
      children
    ),
};


// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import WalletOutlineSvg from '@ant-design/icons-svg/lib/outline/WalletOutline';

export default {
  name: 'Wallet',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: WalletOutlineSvg } },
      children
    ),
};

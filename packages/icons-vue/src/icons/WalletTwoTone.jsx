
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import WalletTwoToneSvg from '@ant-design/icons-svg/lib/twotone/WalletTwoTone';

export default {
  name: 'WalletTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: WalletTwoToneSvg } },
      children
    ),
};

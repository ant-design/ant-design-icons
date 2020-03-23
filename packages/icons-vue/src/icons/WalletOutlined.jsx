// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import WalletOutlinedSvg from '@ant-design/icons-svg/lib/asn/WalletOutlined';

export default {
  name: 'IconWalletOutlined',
  displayName: 'WalletOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: WalletOutlinedSvg } },
      children,
    ),
};
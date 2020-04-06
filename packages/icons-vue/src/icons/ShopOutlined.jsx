// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ShopOutlinedSvg from '@ant-design/icons-svg/lib/asn/ShopOutlined';

export default {
  name: 'IconShopOutlined',
  displayName: 'ShopOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ShopOutlinedSvg } },
      children,
    ),
};
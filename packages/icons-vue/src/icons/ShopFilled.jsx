// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ShopFilledSvg from '@ant-design/icons-svg/lib/asn/ShopFilled';

export default {
  name: 'IconShopFilled',
  displayName: 'ShopFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ShopFilledSvg } },
      children,
    ),
};

// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ShopFillSvg from '@ant-design/icons-svg/lib/fill/ShopFill';

export default {
  name: 'IconShopFilled',
  displayName: 'ShopFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ShopFillSvg } },
      children
    ),
};


// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ShoppingCartOutlineSvg from '@ant-design/icons-svg/lib/outline/ShoppingCartOutline';

export default {
  name: 'IconShoppingCart',
  displayName: 'ShoppingCart',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ShoppingCartOutlineSvg } },
      children
    ),
};

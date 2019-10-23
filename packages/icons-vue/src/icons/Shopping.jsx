
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ShoppingOutlineSvg from '@ant-design/icons-svg/lib/outline/ShoppingOutline';

export default {
  name: 'IconShopping',
  displayName: 'Shopping',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ShoppingOutlineSvg } },
      children
    ),
};


// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ShoppingTwoToneSvg from '@ant-design/icons-svg/lib/twotone/ShoppingTwoTone';

export default {
  name: 'IconShoppingTwoTone',
  displayName: 'ShoppingTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ShoppingTwoToneSvg } },
      children
    ),
};

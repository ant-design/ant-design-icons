
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ShoppingFillSvg from '@ant-design/icons-svg/lib/fill/ShoppingFill';

export default {
  name: 'ShoppingFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ShoppingFillSvg } },
      children
    ),
};

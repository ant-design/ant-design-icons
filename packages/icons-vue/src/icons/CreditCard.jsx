
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CreditCardOutlineSvg from '@ant-design/icons-svg/lib/outline/CreditCardOutline';

export default {
  name: 'CreditCard',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CreditCardOutlineSvg } },
      children
    ),
};

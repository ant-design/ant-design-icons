
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CreditCardFillSvg from '@ant-design/icons-svg/lib/fill/CreditCardFill';

export default {
  name: 'IconCreditCardFilled',
  displayName: 'CreditCardFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CreditCardFillSvg } },
      children
    ),
};

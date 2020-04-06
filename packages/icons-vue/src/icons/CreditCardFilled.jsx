// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CreditCardFilledSvg from '@ant-design/icons-svg/lib/asn/CreditCardFilled';

export default {
  name: 'IconCreditCardFilled',
  displayName: 'CreditCardFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CreditCardFilledSvg } },
      children,
    ),
};
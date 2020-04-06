// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CreditCardTwoToneSvg from '@ant-design/icons-svg/lib/asn/CreditCardTwoTone';

export default {
  name: 'IconCreditCardTwoTone',
  displayName: 'CreditCardTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CreditCardTwoToneSvg } },
      children,
    ),
};
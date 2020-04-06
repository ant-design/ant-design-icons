// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BankFilledSvg from '@ant-design/icons-svg/lib/asn/BankFilled';

export default {
  name: 'IconBankFilled',
  displayName: 'BankFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BankFilledSvg } },
      children,
    ),
};
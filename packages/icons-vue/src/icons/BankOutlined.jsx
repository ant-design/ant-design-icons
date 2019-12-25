// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BankOutlinedSvg from '@ant-design/icons-svg/lib/asn/BankOutlined';

export default {
  name: 'IconBankOutlined',
  displayName: 'BankOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BankOutlinedSvg } },
      children,
    ),
};
// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import TransactionOutlinedSvg from '@ant-design/icons-svg/lib/asn/TransactionOutlined';

export default {
  name: 'IconTransactionOutlined',
  displayName: 'TransactionOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: TransactionOutlinedSvg } },
      children,
    ),
};
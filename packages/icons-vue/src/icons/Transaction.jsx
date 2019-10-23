
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import TransactionOutlineSvg from '@ant-design/icons-svg/lib/outline/TransactionOutline';

export default {
  name: 'IconTransaction',
  displayName: 'Transaction',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TransactionOutlineSvg } },
      children
    ),
};

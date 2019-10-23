
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CustomerServiceOutlineSvg from '@ant-design/icons-svg/lib/outline/CustomerServiceOutline';

export default {
  name: 'IconCustomerService',
  displayName: 'CustomerService',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CustomerServiceOutlineSvg } },
      children
    ),
};

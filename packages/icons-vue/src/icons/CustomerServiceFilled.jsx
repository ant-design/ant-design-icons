
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CustomerServiceFillSvg from '@ant-design/icons-svg/lib/fill/CustomerServiceFill';

export default {
  name: 'IconCustomerServiceFilled',
  displayName: 'CustomerServiceFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CustomerServiceFillSvg } },
      children
    ),
};

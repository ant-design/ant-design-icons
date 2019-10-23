
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CustomerServiceTwoToneSvg from '@ant-design/icons-svg/lib/twotone/CustomerServiceTwoTone';

export default {
  name: 'IconCustomerServiceTwoTone',
  displayName: 'CustomerServiceTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CustomerServiceTwoToneSvg } },
      children
    ),
};

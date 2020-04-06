// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CustomerServiceOutlinedSvg from '@ant-design/icons-svg/lib/asn/CustomerServiceOutlined';

export default {
  name: 'IconCustomerServiceOutlined',
  displayName: 'CustomerServiceOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CustomerServiceOutlinedSvg } },
      children,
    ),
};
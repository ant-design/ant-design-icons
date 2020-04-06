// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CloudServerOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloudServerOutlined';

export default {
  name: 'IconCloudServerOutlined',
  displayName: 'CloudServerOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CloudServerOutlinedSvg } },
      children,
    ),
};
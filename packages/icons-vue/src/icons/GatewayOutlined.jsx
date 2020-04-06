// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import GatewayOutlinedSvg from '@ant-design/icons-svg/lib/asn/GatewayOutlined';

export default {
  name: 'IconGatewayOutlined',
  displayName: 'GatewayOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: GatewayOutlinedSvg } },
      children,
    ),
};
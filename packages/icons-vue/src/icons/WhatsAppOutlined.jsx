// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import WhatsAppOutlinedSvg from '@ant-design/icons-svg/lib/asn/WhatsAppOutlined';

export default {
  name: 'IconWhatsAppOutlined',
  displayName: 'WhatsAppOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: WhatsAppOutlinedSvg } },
      children,
    ),
};
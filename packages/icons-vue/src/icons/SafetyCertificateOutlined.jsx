// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SafetyCertificateOutlinedSvg from '@ant-design/icons-svg/lib/asn/SafetyCertificateOutlined';

export default {
  name: 'IconSafetyCertificateOutlined',
  displayName: 'SafetyCertificateOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SafetyCertificateOutlinedSvg } },
      children,
    ),
};
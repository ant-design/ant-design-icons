// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AuditOutlinedSvg from '@ant-design/icons-svg/lib/asn/AuditOutlined';

export default {
  name: 'IconAuditOutlined',
  displayName: 'AuditOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: AuditOutlinedSvg } },
      children,
    ),
};
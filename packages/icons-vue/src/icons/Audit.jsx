
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AuditOutlineSvg from '@ant-design/icons-svg/lib/outline/AuditOutline';

export default {
  name: 'IconAudit',
  displayName: 'Audit',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AuditOutlineSvg } },
      children
    ),
};

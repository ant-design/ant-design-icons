// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import AuditSvg from '@ant-design/icons-svg/lib/asn/AuditOutlined'

export default {
  name: 'Audit',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AuditSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ReconciliationSvg from '@ant-design/icons-svg/lib/asn/ReconciliationOutlined'

export default {
  name: 'Reconciliation',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ReconciliationSvg } },
      children
    )
};
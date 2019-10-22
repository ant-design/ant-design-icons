// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import SecurityScanSvg from '@ant-design/icons-svg/lib/asn/SecurityScanOutlined'

export default {
  name: 'SecurityScan',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SecurityScanSvg } },
      children
    )
};
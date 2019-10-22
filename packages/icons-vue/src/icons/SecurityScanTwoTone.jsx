// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import SecurityScanTwoToneSvg from '@ant-design/icons-svg/lib/asn/SecurityScanTwoTone'

export default {
  name: 'SecurityScanTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SecurityScanTwoToneSvg } },
      children
    )
};
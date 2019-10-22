// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ScanSvg from '@ant-design/icons-svg/lib/asn/ScanOutlined'

export default {
  name: 'Scan',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ScanSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import WarningSvg from '@ant-design/icons-svg/lib/asn/WarningOutlined'

export default {
  name: 'Warning',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: WarningSvg } },
      children
    )
};
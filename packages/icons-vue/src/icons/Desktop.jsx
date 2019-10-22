// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import DesktopSvg from '@ant-design/icons-svg/lib/asn/DesktopOutlined'

export default {
  name: 'Desktop',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DesktopSvg } },
      children
    )
};
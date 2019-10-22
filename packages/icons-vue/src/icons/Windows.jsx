// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import WindowsSvg from '@ant-design/icons-svg/lib/asn/WindowsOutlined'

export default {
  name: 'Windows',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: WindowsSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import StopSvg from '@ant-design/icons-svg/lib/asn/StopOutlined'

export default {
  name: 'Stop',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: StopSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ControlSvg from '@ant-design/icons-svg/lib/asn/ControlOutlined'

export default {
  name: 'Control',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ControlSvg } },
      children
    )
};
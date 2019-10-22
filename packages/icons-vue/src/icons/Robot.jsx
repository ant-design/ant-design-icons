// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import RobotSvg from '@ant-design/icons-svg/lib/asn/RobotOutlined'

export default {
  name: 'Robot',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RobotSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import PauseCircleSvg from '@ant-design/icons-svg/lib/asn/PauseCircleOutlined'

export default {
  name: 'PauseCircle',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PauseCircleSvg } },
      children
    )
};
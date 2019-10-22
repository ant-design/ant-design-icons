// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import PauseSvg from '@ant-design/icons-svg/lib/asn/PauseOutlined'

export default {
  name: 'Pause',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PauseSvg } },
      children
    )
};
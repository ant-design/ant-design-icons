// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import PauseCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/PauseCircleTwoTone'

export default {
  name: 'PauseCircleTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PauseCircleTwoToneSvg } },
      children
    )
};
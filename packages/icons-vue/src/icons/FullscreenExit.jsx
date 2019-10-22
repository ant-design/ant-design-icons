// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FullscreenExitSvg from '@ant-design/icons-svg/lib/asn/FullscreenExitOutlined'

export default {
  name: 'FullscreenExit',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FullscreenExitSvg } },
      children
    )
};
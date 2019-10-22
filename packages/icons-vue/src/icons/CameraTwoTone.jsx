// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CameraTwoToneSvg from '@ant-design/icons-svg/lib/asn/CameraTwoTone'

export default {
  name: 'CameraTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CameraTwoToneSvg } },
      children
    )
};
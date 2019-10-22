// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import VideoCameraTwoToneSvg from '@ant-design/icons-svg/lib/asn/VideoCameraTwoTone'

export default {
  name: 'VideoCameraTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: VideoCameraTwoToneSvg } },
      children
    )
};
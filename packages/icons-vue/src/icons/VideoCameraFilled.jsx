// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import VideoCameraFilledSvg from '@ant-design/icons-svg/lib/asn/VideoCameraFilled'

export default {
  name: 'VideoCameraFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: VideoCameraFilledSvg } },
      children
    )
};
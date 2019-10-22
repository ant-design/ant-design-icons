// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import VideoCameraSvg from '@ant-design/icons-svg/lib/asn/VideoCameraOutlined'

export default {
  name: 'VideoCamera',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: VideoCameraSvg } },
      children
    )
};
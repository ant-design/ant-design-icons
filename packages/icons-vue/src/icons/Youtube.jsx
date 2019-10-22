// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import YoutubeSvg from '@ant-design/icons-svg/lib/asn/YoutubeOutlined'

export default {
  name: 'Youtube',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: YoutubeSvg } },
      children
    )
};
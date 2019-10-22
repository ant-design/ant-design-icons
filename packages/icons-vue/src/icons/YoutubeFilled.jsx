// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import YoutubeFilledSvg from '@ant-design/icons-svg/lib/asn/YoutubeFilled'

export default {
  name: 'YoutubeFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: YoutubeFilledSvg } },
      children
    )
};
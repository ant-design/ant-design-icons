// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import LikeTwoToneSvg from '@ant-design/icons-svg/lib/asn/LikeTwoTone'

export default {
  name: 'LikeTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LikeTwoToneSvg } },
      children
    )
};
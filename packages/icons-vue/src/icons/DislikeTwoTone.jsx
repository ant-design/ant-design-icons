// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import DislikeTwoToneSvg from '@ant-design/icons-svg/lib/asn/DislikeTwoTone'

export default {
  name: 'DislikeTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DislikeTwoToneSvg } },
      children
    )
};
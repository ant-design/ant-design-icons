// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import MobileTwoToneSvg from '@ant-design/icons-svg/lib/asn/MobileTwoTone'

export default {
  name: 'MobileTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MobileTwoToneSvg } },
      children
    )
};
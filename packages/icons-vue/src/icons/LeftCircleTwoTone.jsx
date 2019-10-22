// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import LeftCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/LeftCircleTwoTone'

export default {
  name: 'LeftCircleTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LeftCircleTwoToneSvg } },
      children
    )
};
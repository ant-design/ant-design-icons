// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import RightCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/RightCircleTwoTone'

export default {
  name: 'RightCircleTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RightCircleTwoToneSvg } },
      children
    )
};
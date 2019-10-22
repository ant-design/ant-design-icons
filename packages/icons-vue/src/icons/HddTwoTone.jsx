// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import HddTwoToneSvg from '@ant-design/icons-svg/lib/asn/HddTwoTone'

export default {
  name: 'HddTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: HddTwoToneSvg } },
      children
    )
};
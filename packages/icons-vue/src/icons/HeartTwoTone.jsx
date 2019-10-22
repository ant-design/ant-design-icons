// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import HeartTwoToneSvg from '@ant-design/icons-svg/lib/asn/HeartTwoTone'

export default {
  name: 'HeartTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: HeartTwoToneSvg } },
      children
    )
};
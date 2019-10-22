// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ThunderboltTwoToneSvg from '@ant-design/icons-svg/lib/asn/ThunderboltTwoTone'

export default {
  name: 'ThunderboltTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ThunderboltTwoToneSvg } },
      children
    )
};
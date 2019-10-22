// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import MehTwoToneSvg from '@ant-design/icons-svg/lib/asn/MehTwoTone'

export default {
  name: 'MehTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MehTwoToneSvg } },
      children
    )
};
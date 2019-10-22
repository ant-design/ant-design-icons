// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CanlendarTwoToneSvg from '@ant-design/icons-svg/lib/asn/CanlendarTwoTone'

export default {
  name: 'CanlendarTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CanlendarTwoToneSvg } },
      children
    )
};
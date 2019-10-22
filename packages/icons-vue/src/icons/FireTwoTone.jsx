// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FireTwoToneSvg from '@ant-design/icons-svg/lib/asn/FireTwoTone'

export default {
  name: 'FireTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FireTwoToneSvg } },
      children
    )
};
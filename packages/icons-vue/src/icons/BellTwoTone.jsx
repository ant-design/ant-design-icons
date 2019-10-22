// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import BellTwoToneSvg from '@ant-design/icons-svg/lib/asn/BellTwoTone'

export default {
  name: 'BellTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BellTwoToneSvg } },
      children
    )
};
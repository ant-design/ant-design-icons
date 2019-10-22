// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import WarningTwoToneSvg from '@ant-design/icons-svg/lib/asn/WarningTwoTone'

export default {
  name: 'WarningTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: WarningTwoToneSvg } },
      children
    )
};
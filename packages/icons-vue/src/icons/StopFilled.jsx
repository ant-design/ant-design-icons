// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import StopFilledSvg from '@ant-design/icons-svg/lib/asn/StopFilled'

export default {
  name: 'StopFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: StopFilledSvg } },
      children
    )
};
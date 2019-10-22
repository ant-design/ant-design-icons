// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import RocketFilledSvg from '@ant-design/icons-svg/lib/asn/RocketFilled'

export default {
  name: 'RocketFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RocketFilledSvg } },
      children
    )
};
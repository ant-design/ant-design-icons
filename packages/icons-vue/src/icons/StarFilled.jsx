// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import StarFilledSvg from '@ant-design/icons-svg/lib/asn/StarFilled'

export default {
  name: 'StarFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: StarFilledSvg } },
      children
    )
};
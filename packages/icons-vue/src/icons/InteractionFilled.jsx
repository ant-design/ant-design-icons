// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import InteractionFilledSvg from '@ant-design/icons-svg/lib/asn/InteractionFilled'

export default {
  name: 'InteractionFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: InteractionFilledSvg } },
      children
    )
};
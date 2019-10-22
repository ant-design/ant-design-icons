// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import InteractionTwoToneSvg from '@ant-design/icons-svg/lib/asn/InteractionTwoTone'

export default {
  name: 'InteractionTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: InteractionTwoToneSvg } },
      children
    )
};
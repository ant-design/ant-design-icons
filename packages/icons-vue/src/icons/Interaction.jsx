// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import InteractionSvg from '@ant-design/icons-svg/lib/asn/InteractionOutlined'

export default {
  name: 'Interaction',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: InteractionSvg } },
      children
    )
};
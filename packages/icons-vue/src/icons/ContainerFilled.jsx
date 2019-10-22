// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ContainerFilledSvg from '@ant-design/icons-svg/lib/asn/ContainerFilled'

export default {
  name: 'ContainerFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ContainerFilledSvg } },
      children
    )
};
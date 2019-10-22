// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ContainerTwoToneSvg from '@ant-design/icons-svg/lib/asn/ContainerTwoTone'

export default {
  name: 'ContainerTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ContainerTwoToneSvg } },
      children
    )
};
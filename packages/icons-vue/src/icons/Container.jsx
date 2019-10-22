// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ContainerSvg from '@ant-design/icons-svg/lib/asn/ContainerOutlined'

export default {
  name: 'Container',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ContainerSvg } },
      children
    )
};
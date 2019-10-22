// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import MenuFoldSvg from '@ant-design/icons-svg/lib/asn/MenuFoldOutlined'

export default {
  name: 'MenuFold',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MenuFoldSvg } },
      children
    )
};
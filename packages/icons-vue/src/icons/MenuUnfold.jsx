// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import MenuUnfoldSvg from '@ant-design/icons-svg/lib/asn/MenuUnfoldOutlined'

export default {
  name: 'MenuUnfold',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MenuUnfoldSvg } },
      children
    )
};
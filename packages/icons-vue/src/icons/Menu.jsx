// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import MenuSvg from '@ant-design/icons-svg/lib/asn/MenuOutlined'

export default {
  name: 'Menu',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MenuSvg } },
      children
    )
};
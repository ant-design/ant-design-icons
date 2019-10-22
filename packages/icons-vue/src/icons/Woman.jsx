// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import WomanSvg from '@ant-design/icons-svg/lib/asn/WomanOutlined'

export default {
  name: 'Woman',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: WomanSvg } },
      children
    )
};
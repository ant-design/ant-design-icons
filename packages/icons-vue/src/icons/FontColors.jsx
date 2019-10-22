// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FontColorsSvg from '@ant-design/icons-svg/lib/asn/FontColorsOutlined'

export default {
  name: 'FontColors',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FontColorsSvg } },
      children
    )
};
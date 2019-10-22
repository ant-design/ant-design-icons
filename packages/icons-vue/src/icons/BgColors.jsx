// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import BgColorsSvg from '@ant-design/icons-svg/lib/asn/BgColorsOutlined'

export default {
  name: 'BgColors',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BgColorsSvg } },
      children
    )
};
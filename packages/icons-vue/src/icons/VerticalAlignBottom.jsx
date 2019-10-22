// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import VerticalAlignBottomSvg from '@ant-design/icons-svg/lib/asn/VerticalAlignBottomOutlined'

export default {
  name: 'VerticalAlignBottom',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: VerticalAlignBottomSvg } },
      children
    )
};
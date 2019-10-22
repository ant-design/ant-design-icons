// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import VerticalAlignMiddleSvg from '@ant-design/icons-svg/lib/asn/VerticalAlignMiddleOutlined'

export default {
  name: 'VerticalAlignMiddle',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: VerticalAlignMiddleSvg } },
      children
    )
};
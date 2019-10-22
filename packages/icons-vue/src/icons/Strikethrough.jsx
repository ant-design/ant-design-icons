// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import StrikethroughSvg from '@ant-design/icons-svg/lib/asn/StrikethroughOutlined'

export default {
  name: 'Strikethrough',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: StrikethroughSvg } },
      children
    )
};
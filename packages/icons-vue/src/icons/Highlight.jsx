// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import HighlightSvg from '@ant-design/icons-svg/lib/asn/HighlightOutlined'

export default {
  name: 'Highlight',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: HighlightSvg } },
      children
    )
};
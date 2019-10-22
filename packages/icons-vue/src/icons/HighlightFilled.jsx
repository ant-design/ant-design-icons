// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import HighlightFilledSvg from '@ant-design/icons-svg/lib/asn/HighlightFilled'

export default {
  name: 'HighlightFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: HighlightFilledSvg } },
      children
    )
};
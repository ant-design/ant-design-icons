// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import HighlightTwoToneSvg from '@ant-design/icons-svg/lib/asn/HighlightTwoTone'

export default {
  name: 'HighlightTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: HighlightTwoToneSvg } },
      children
    )
};
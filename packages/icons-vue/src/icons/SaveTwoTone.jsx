// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import SaveTwoToneSvg from '@ant-design/icons-svg/lib/asn/SaveTwoTone'

export default {
  name: 'SaveTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SaveTwoToneSvg } },
      children
    )
};
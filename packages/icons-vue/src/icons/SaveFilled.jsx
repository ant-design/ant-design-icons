// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import SaveFilledSvg from '@ant-design/icons-svg/lib/asn/SaveFilled'

export default {
  name: 'SaveFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SaveFilledSvg } },
      children
    )
};
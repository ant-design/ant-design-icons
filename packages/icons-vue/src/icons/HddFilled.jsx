// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import HddFilledSvg from '@ant-design/icons-svg/lib/asn/HddFilled'

export default {
  name: 'HddFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: HddFilledSvg } },
      children
    )
};
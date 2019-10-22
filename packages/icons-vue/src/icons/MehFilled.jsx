// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import MehFilledSvg from '@ant-design/icons-svg/lib/asn/MehFilled'

export default {
  name: 'MehFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MehFilledSvg } },
      children
    )
};
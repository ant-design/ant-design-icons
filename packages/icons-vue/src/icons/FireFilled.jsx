// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FireFilledSvg from '@ant-design/icons-svg/lib/asn/FireFilled'

export default {
  name: 'FireFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FireFilledSvg } },
      children
    )
};
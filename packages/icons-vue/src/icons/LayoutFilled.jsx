// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import LayoutFilledSvg from '@ant-design/icons-svg/lib/asn/LayoutFilled'

export default {
  name: 'LayoutFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LayoutFilledSvg } },
      children
    )
};
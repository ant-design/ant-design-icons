// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import PushpinFilledSvg from '@ant-design/icons-svg/lib/asn/PushpinFilled'

export default {
  name: 'PushpinFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PushpinFilledSvg } },
      children
    )
};
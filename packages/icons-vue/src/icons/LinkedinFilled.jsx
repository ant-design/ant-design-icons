// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import LinkedinFilledSvg from '@ant-design/icons-svg/lib/asn/LinkedinFilled'

export default {
  name: 'LinkedinFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LinkedinFilledSvg } },
      children
    )
};
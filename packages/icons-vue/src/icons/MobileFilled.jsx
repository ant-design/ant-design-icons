// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import MobileFilledSvg from '@ant-design/icons-svg/lib/asn/MobileFilled'

export default {
  name: 'MobileFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MobileFilledSvg } },
      children
    )
};
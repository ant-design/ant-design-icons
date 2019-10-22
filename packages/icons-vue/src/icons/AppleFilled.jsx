// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import AppleFilledSvg from '@ant-design/icons-svg/lib/asn/AppleFilled'

export default {
  name: 'AppleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AppleFilledSvg } },
      children
    )
};
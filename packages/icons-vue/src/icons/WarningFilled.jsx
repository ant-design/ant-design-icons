// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import WarningFilledSvg from '@ant-design/icons-svg/lib/asn/WarningFilled'

export default {
  name: 'WarningFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: WarningFilledSvg } },
      children
    )
};
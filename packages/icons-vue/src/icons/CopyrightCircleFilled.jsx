// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CopyrightCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CopyrightCircleFilled'

export default {
  name: 'CopyrightCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CopyrightCircleFilledSvg } },
      children
    )
};
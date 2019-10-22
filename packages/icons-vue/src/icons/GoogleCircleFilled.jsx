// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import GoogleCircleFilledSvg from '@ant-design/icons-svg/lib/asn/GoogleCircleFilled'

export default {
  name: 'GoogleCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: GoogleCircleFilledSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import GooglePlusCircleFilledSvg from '@ant-design/icons-svg/lib/asn/GooglePlusCircleFilled'

export default {
  name: 'GooglePlusCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: GooglePlusCircleFilledSvg } },
      children
    )
};
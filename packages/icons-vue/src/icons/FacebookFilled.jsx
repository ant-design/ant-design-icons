// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FacebookFilledSvg from '@ant-design/icons-svg/lib/asn/FacebookFilled'

export default {
  name: 'FacebookFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FacebookFilledSvg } },
      children
    )
};
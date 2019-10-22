// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import PhoneFilledSvg from '@ant-design/icons-svg/lib/asn/PhoneFilled'

export default {
  name: 'PhoneFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PhoneFilledSvg } },
      children
    )
};
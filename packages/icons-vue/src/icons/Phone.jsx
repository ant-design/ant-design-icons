// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import PhoneSvg from '@ant-design/icons-svg/lib/asn/PhoneOutlined'

export default {
  name: 'Phone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PhoneSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import BorderOuterSvg from '@ant-design/icons-svg/lib/asn/BorderOuterOutlined'

export default {
  name: 'BorderOuter',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BorderOuterSvg } },
      children
    )
};
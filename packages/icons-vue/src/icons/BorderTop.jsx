// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import BorderTopSvg from '@ant-design/icons-svg/lib/asn/BorderTopOutlined'

export default {
  name: 'BorderTop',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BorderTopSvg } },
      children
    )
};
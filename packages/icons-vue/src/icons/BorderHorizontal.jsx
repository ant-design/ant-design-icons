// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import BorderHorizontalSvg from '@ant-design/icons-svg/lib/asn/BorderHorizontalOutlined'

export default {
  name: 'BorderHorizontal',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BorderHorizontalSvg } },
      children
    )
};
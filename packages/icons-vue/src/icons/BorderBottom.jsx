// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import BorderBottomSvg from '@ant-design/icons-svg/lib/asn/BorderBottomOutlined'

export default {
  name: 'BorderBottom',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BorderBottomSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import BorderRightSvg from '@ant-design/icons-svg/lib/asn/BorderRightOutlined'

export default {
  name: 'BorderRight',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BorderRightSvg } },
      children
    )
};
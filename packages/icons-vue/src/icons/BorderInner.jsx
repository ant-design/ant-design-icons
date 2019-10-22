// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import BorderInnerSvg from '@ant-design/icons-svg/lib/asn/BorderInnerOutlined'

export default {
  name: 'BorderInner',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BorderInnerSvg } },
      children
    )
};
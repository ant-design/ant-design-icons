// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import BorderLeftSvg from '@ant-design/icons-svg/lib/asn/BorderLeftOutlined'

export default {
  name: 'BorderLeft',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BorderLeftSvg } },
      children
    )
};
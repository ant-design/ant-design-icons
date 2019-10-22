// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import OrderedListSvg from '@ant-design/icons-svg/lib/asn/OrderedListOutlined'

export default {
  name: 'OrderedList',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: OrderedListSvg } },
      children
    )
};
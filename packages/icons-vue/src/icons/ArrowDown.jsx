// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ArrowDownSvg from '@ant-design/icons-svg/lib/asn/ArrowDownOutlined'

export default {
  name: 'ArrowDown',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ArrowDownSvg } },
      children
    )
};
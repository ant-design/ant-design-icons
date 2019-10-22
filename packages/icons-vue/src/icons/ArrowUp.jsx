// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ArrowUpSvg from '@ant-design/icons-svg/lib/asn/ArrowUpOutlined'

export default {
  name: 'ArrowUp',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ArrowUpSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ForkSvg from '@ant-design/icons-svg/lib/asn/ForkOutlined'

export default {
  name: 'Fork',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ForkSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import RiseSvg from '@ant-design/icons-svg/lib/asn/RiseOutlined'

export default {
  name: 'Rise',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RiseSvg } },
      children
    )
};
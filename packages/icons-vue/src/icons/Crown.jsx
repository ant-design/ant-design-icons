// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CrownSvg from '@ant-design/icons-svg/lib/asn/CrownOutlined'

export default {
  name: 'Crown',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CrownSvg } },
      children
    )
};
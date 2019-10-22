// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FrownSvg from '@ant-design/icons-svg/lib/asn/FrownOutlined'

export default {
  name: 'Frown',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FrownSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CompassSvg from '@ant-design/icons-svg/lib/asn/CompassOutlined'

export default {
  name: 'Compass',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CompassSvg } },
      children
    )
};
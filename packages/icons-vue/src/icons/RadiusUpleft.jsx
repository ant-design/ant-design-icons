// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import RadiusUpleftSvg from '@ant-design/icons-svg/lib/asn/RadiusUpleftOutlined'

export default {
  name: 'RadiusUpleft',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RadiusUpleftSvg } },
      children
    )
};
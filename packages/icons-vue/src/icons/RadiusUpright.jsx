// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import RadiusUprightSvg from '@ant-design/icons-svg/lib/asn/RadiusUprightOutlined'

export default {
  name: 'RadiusUpright',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RadiusUprightSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import HomeSvg from '@ant-design/icons-svg/lib/asn/HomeOutlined'

export default {
  name: 'Home',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: HomeSvg } },
      children
    )
};
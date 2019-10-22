// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import HddSvg from '@ant-design/icons-svg/lib/asn/HddOutlined'

export default {
  name: 'Hdd',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: HddSvg } },
      children
    )
};
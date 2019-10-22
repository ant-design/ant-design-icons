// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CiSvg from '@ant-design/icons-svg/lib/asn/CiOutlined'

export default {
  name: 'Ci',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CiSvg } },
      children
    )
};
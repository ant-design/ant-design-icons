// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import UpSvg from '@ant-design/icons-svg/lib/asn/UpOutlined'

export default {
  name: 'Up',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: UpSvg } },
      children
    )
};
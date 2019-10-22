// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import HeartSvg from '@ant-design/icons-svg/lib/asn/HeartOutlined'

export default {
  name: 'Heart',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: HeartSvg } },
      children
    )
};
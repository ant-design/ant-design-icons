// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ChromeSvg from '@ant-design/icons-svg/lib/asn/ChromeOutlined'

export default {
  name: 'Chrome',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ChromeSvg } },
      children
    )
};
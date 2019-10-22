// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ArrowsAltSvg from '@ant-design/icons-svg/lib/asn/ArrowsAltOutlined'

export default {
  name: 'ArrowsAlt',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ArrowsAltSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import RadiusBottomleftSvg from '@ant-design/icons-svg/lib/asn/RadiusBottomleftOutlined'

export default {
  name: 'RadiusBottomleft',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RadiusBottomleftSvg } },
      children
    )
};
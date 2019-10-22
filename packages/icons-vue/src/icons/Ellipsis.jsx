// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import EllipsisSvg from '@ant-design/icons-svg/lib/asn/EllipsisOutlined'

export default {
  name: 'Ellipsis',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: EllipsisSvg } },
      children
    )
};
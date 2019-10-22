// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import BehanceSquareSvg from '@ant-design/icons-svg/lib/asn/BehanceSquareOutlined'

export default {
  name: 'BehanceSquare',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BehanceSquareSvg } },
      children
    )
};
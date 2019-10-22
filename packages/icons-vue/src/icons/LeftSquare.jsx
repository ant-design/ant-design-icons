// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import LeftSquareSvg from '@ant-design/icons-svg/lib/asn/LeftSquareOutlined'

export default {
  name: 'LeftSquare',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LeftSquareSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import UpSquareSvg from '@ant-design/icons-svg/lib/asn/UpSquareOutlined'

export default {
  name: 'UpSquare',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: UpSquareSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import DownSquareSvg from '@ant-design/icons-svg/lib/asn/DownSquareOutlined'

export default {
  name: 'DownSquare',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DownSquareSvg } },
      children
    )
};
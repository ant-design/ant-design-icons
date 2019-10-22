// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import PlusSquareSvg from '@ant-design/icons-svg/lib/asn/PlusSquareOutlined'

export default {
  name: 'PlusSquare',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PlusSquareSvg } },
      children
    )
};
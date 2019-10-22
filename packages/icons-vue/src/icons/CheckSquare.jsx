// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CheckSquareSvg from '@ant-design/icons-svg/lib/asn/CheckSquareOutlined'

export default {
  name: 'CheckSquare',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CheckSquareSvg } },
      children
    )
};
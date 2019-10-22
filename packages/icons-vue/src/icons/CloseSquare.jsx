// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CloseSquareSvg from '@ant-design/icons-svg/lib/asn/CloseSquareOutlined'

export default {
  name: 'CloseSquare',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CloseSquareSvg } },
      children
    )
};
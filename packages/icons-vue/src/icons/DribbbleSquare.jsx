// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import DribbbleSquareSvg from '@ant-design/icons-svg/lib/asn/DribbbleSquareOutlined'

export default {
  name: 'DribbbleSquare',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DribbbleSquareSvg } },
      children
    )
};
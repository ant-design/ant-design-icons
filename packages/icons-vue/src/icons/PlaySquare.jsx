// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import PlaySquareSvg from '@ant-design/icons-svg/lib/asn/PlaySquareOutlined'

export default {
  name: 'PlaySquare',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PlaySquareSvg } },
      children
    )
};
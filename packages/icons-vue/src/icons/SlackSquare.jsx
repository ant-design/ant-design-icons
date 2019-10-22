// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import SlackSquareSvg from '@ant-design/icons-svg/lib/asn/SlackSquareOutlined'

export default {
  name: 'SlackSquare',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SlackSquareSvg } },
      children
    )
};
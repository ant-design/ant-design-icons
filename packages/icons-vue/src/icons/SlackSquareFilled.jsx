// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import SlackSquareFilledSvg from '@ant-design/icons-svg/lib/asn/SlackSquareFilled'

export default {
  name: 'SlackSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SlackSquareFilledSvg } },
      children
    )
};
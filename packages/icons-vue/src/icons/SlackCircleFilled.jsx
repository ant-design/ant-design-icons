// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import SlackCircleFilledSvg from '@ant-design/icons-svg/lib/asn/SlackCircleFilled'

export default {
  name: 'SlackCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SlackCircleFilledSvg } },
      children
    )
};
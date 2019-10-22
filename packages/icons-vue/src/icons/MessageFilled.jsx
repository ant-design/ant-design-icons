// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import MessageFilledSvg from '@ant-design/icons-svg/lib/asn/MessageFilled'

export default {
  name: 'MessageFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MessageFilledSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import MessageSvg from '@ant-design/icons-svg/lib/asn/MessageOutlined'

export default {
  name: 'Message',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MessageSvg } },
      children
    )
};
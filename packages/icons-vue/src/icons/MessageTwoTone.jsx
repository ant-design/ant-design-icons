// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import MessageTwoToneSvg from '@ant-design/icons-svg/lib/asn/MessageTwoTone'

export default {
  name: 'MessageTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MessageTwoToneSvg } },
      children
    )
};
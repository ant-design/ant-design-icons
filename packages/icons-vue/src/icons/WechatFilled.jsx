// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import WechatFilledSvg from '@ant-design/icons-svg/lib/asn/WechatFilled'

export default {
  name: 'WechatFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: WechatFilledSvg } },
      children
    )
};
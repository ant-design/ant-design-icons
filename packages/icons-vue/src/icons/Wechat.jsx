// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import WechatSvg from '@ant-design/icons-svg/lib/asn/WechatOutlined'

export default {
  name: 'Wechat',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: WechatSvg } },
      children
    )
};
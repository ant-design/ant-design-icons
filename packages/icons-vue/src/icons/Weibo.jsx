// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import WeiboSvg from '@ant-design/icons-svg/lib/asn/WeiboOutlined'

export default {
  name: 'Weibo',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: WeiboSvg } },
      children
    )
};
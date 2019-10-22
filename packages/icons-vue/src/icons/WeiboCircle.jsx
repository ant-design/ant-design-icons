// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import WeiboCircleSvg from '@ant-design/icons-svg/lib/asn/WeiboCircleOutlined'

export default {
  name: 'WeiboCircle',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: WeiboCircleSvg } },
      children
    )
};
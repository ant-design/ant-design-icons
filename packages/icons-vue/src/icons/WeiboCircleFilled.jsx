// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import WeiboCircleFilledSvg from '@ant-design/icons-svg/lib/asn/WeiboCircleFilled'

export default {
  name: 'WeiboCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: WeiboCircleFilledSvg } },
      children
    )
};
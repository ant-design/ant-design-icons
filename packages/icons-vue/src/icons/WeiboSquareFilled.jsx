// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import WeiboSquareFilledSvg from '@ant-design/icons-svg/lib/asn/WeiboSquareFilled'

export default {
  name: 'WeiboSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: WeiboSquareFilledSvg } },
      children
    )
};
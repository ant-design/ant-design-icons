// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ZhihuSquareFilledSvg from '@ant-design/icons-svg/lib/asn/ZhihuSquareFilled'

export default {
  name: 'ZhihuSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ZhihuSquareFilledSvg } },
      children
    )
};
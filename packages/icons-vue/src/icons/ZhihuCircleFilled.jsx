// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ZhihuCircleFilledSvg from '@ant-design/icons-svg/lib/asn/ZhihuCircleFilled'

export default {
  name: 'ZhihuCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ZhihuCircleFilledSvg } },
      children
    )
};
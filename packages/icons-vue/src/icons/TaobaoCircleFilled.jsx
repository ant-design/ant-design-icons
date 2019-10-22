// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import TaobaoCircleFilledSvg from '@ant-design/icons-svg/lib/asn/TaobaoCircleFilled'

export default {
  name: 'TaobaoCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TaobaoCircleFilledSvg } },
      children
    )
};
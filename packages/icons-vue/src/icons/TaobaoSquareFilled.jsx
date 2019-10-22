// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import TaobaoSquareFilledSvg from '@ant-design/icons-svg/lib/asn/TaobaoSquareFilled'

export default {
  name: 'TaobaoSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TaobaoSquareFilledSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import DingtalkSquareFilledSvg from '@ant-design/icons-svg/lib/asn/DingtalkSquareFilled'

export default {
  name: 'DingtalkSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DingtalkSquareFilledSvg } },
      children
    )
};
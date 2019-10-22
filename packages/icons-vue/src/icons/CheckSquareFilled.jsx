// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CheckSquareFilledSvg from '@ant-design/icons-svg/lib/asn/CheckSquareFilled'

export default {
  name: 'CheckSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CheckSquareFilledSvg } },
      children
    )
};
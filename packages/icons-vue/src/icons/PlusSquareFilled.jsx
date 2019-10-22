// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import PlusSquareFilledSvg from '@ant-design/icons-svg/lib/asn/PlusSquareFilled'

export default {
  name: 'PlusSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PlusSquareFilledSvg } },
      children
    )
};
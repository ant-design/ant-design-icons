// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import MinusSquareFilledSvg from '@ant-design/icons-svg/lib/asn/MinusSquareFilled'

export default {
  name: 'MinusSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MinusSquareFilledSvg } },
      children
    )
};
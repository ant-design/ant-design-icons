// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CodepenSquareFilledSvg from '@ant-design/icons-svg/lib/asn/CodepenSquareFilled'

export default {
  name: 'CodepenSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CodepenSquareFilledSvg } },
      children
    )
};
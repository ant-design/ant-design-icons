// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CodeSandboxSquareFilledSvg from '@ant-design/icons-svg/lib/asn/CodeSandboxSquareFilled'

export default {
  name: 'CodeSandboxSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CodeSandboxSquareFilledSvg } },
      children
    )
};
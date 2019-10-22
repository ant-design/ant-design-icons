// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CodeSandboxCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CodeSandboxCircleFilled'

export default {
  name: 'CodeSandboxCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CodeSandboxCircleFilledSvg } },
      children
    )
};
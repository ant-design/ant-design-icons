// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CodeSandboxSvg from '@ant-design/icons-svg/lib/asn/CodeSandboxOutlined'

export default {
  name: 'CodeSandbox',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CodeSandboxSvg } },
      children
    )
};
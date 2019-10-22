// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CodeSvg from '@ant-design/icons-svg/lib/asn/CodeOutlined'

export default {
  name: 'Code',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CodeSvg } },
      children
    )
};
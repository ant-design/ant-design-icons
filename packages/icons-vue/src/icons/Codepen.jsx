// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CodepenSvg from '@ant-design/icons-svg/lib/asn/CodepenOutlined'

export default {
  name: 'Codepen',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CodepenSvg } },
      children
    )
};
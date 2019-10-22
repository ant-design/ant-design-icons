// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CodepenCircleSvg from '@ant-design/icons-svg/lib/asn/CodepenCircleOutlined'

export default {
  name: 'CodepenCircle',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CodepenCircleSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FastBackwardSvg from '@ant-design/icons-svg/lib/asn/FastBackwardOutlined'

export default {
  name: 'FastBackward',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FastBackwardSvg } },
      children
    )
};
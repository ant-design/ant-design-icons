// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import EyeInvisibleSvg from '@ant-design/icons-svg/lib/asn/EyeInvisibleOutlined'

export default {
  name: 'EyeInvisible',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: EyeInvisibleSvg } },
      children
    )
};
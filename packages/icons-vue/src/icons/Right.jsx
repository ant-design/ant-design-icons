// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import RightSvg from '@ant-design/icons-svg/lib/asn/RightOutlined'

export default {
  name: 'Right',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RightSvg } },
      children
    )
};
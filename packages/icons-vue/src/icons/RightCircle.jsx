// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import RightCircleSvg from '@ant-design/icons-svg/lib/asn/RightCircleOutlined'

export default {
  name: 'RightCircle',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RightCircleSvg } },
      children
    )
};
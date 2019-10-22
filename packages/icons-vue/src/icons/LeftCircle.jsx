// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import LeftCircleSvg from '@ant-design/icons-svg/lib/asn/LeftCircleOutlined'

export default {
  name: 'LeftCircle',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LeftCircleSvg } },
      children
    )
};
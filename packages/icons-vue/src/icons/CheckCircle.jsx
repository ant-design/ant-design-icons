// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CheckCircleSvg from '@ant-design/icons-svg/lib/asn/CheckCircleOutlined'

export default {
  name: 'CheckCircle',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CheckCircleSvg } },
      children
    )
};
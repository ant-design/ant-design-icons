// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import InfoCircleSvg from '@ant-design/icons-svg/lib/asn/InfoCircleOutlined'

export default {
  name: 'InfoCircle',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: InfoCircleSvg } },
      children
    )
};
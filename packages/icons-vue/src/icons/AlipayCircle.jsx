// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import AlipayCircleSvg from '@ant-design/icons-svg/lib/asn/AlipayCircleOutlined'

export default {
  name: 'AlipayCircle',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AlipayCircleSvg } },
      children
    )
};
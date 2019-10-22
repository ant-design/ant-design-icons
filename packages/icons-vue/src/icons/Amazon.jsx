// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import AmazonSvg from '@ant-design/icons-svg/lib/asn/AmazonOutlined'

export default {
  name: 'Amazon',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AmazonSvg } },
      children
    )
};
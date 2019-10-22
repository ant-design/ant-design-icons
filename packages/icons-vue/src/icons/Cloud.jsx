// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CloudSvg from '@ant-design/icons-svg/lib/asn/CloudOutlined'

export default {
  name: 'Cloud',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CloudSvg } },
      children
    )
};
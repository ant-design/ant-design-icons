// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import AlibabaSvg from '@ant-design/icons-svg/lib/asn/AlibabaOutlined'

export default {
  name: 'Alibaba',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AlibabaSvg } },
      children
    )
};
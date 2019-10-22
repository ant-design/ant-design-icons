// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CloudServerSvg from '@ant-design/icons-svg/lib/asn/CloudServerOutlined'

export default {
  name: 'CloudServer',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CloudServerSvg } },
      children
    )
};
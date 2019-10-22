// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import SafetyCertificateSvg from '@ant-design/icons-svg/lib/asn/SafetyCertificateOutlined'

export default {
  name: 'SafetyCertificate',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SafetyCertificateSvg } },
      children
    )
};
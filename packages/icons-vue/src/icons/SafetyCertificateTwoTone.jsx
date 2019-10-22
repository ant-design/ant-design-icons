// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import SafetyCertificateTwoToneSvg from '@ant-design/icons-svg/lib/asn/SafetyCertificateTwoTone'

export default {
  name: 'SafetyCertificateTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SafetyCertificateTwoToneSvg } },
      children
    )
};
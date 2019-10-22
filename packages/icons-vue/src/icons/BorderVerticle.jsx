// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import BorderVerticleSvg from '@ant-design/icons-svg/lib/asn/BorderVerticleOutlined'

export default {
  name: 'BorderVerticle',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BorderVerticleSvg } },
      children
    )
};
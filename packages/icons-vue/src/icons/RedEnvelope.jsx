// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import RedEnvelopeSvg from '@ant-design/icons-svg/lib/asn/RedEnvelopeOutlined'

export default {
  name: 'RedEnvelope',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RedEnvelopeSvg } },
      children
    )
};
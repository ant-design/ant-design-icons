// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import RedEnvelopeFilledSvg from '@ant-design/icons-svg/lib/asn/RedEnvelopeFilled'

export default {
  name: 'RedEnvelopeFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RedEnvelopeFilledSvg } },
      children
    )
};
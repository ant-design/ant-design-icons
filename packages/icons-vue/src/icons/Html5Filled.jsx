// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import Html5FilledSvg from '@ant-design/icons-svg/lib/asn/Html5Filled'

export default {
  name: 'Html5Filled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: Html5FilledSvg } },
      children
    )
};
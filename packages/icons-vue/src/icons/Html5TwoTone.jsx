// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import Html5TwoToneSvg from '@ant-design/icons-svg/lib/asn/Html5TwoTone'

export default {
  name: 'Html5TwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: Html5TwoToneSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import Html5Svg from '@ant-design/icons-svg/lib/asn/Html5Outlined'

export default {
  name: 'Html5',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: Html5Svg } },
      children
    )
};
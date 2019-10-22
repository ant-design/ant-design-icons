// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import PushpinSvg from '@ant-design/icons-svg/lib/asn/PushpinOutlined'

export default {
  name: 'Pushpin',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PushpinSvg } },
      children
    )
};
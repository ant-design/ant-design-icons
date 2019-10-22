// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import KeySvg from '@ant-design/icons-svg/lib/asn/KeyOutlined'

export default {
  name: 'Key',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: KeySvg } },
      children
    )
};
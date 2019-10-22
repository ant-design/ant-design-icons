// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import BorderSvg from '@ant-design/icons-svg/lib/asn/BorderOutlined'

export default {
  name: 'Border',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BorderSvg } },
      children
    )
};
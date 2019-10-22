// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import EnterSvg from '@ant-design/icons-svg/lib/asn/EnterOutlined'

export default {
  name: 'Enter',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: EnterSvg } },
      children
    )
};
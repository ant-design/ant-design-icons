// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FlagSvg from '@ant-design/icons-svg/lib/asn/FlagOutlined'

export default {
  name: 'Flag',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FlagSvg } },
      children
    )
};
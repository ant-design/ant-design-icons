// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import DatabaseFilledSvg from '@ant-design/icons-svg/lib/asn/DatabaseFilled'

export default {
  name: 'DatabaseFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DatabaseFilledSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import DatabaseTwoToneSvg from '@ant-design/icons-svg/lib/asn/DatabaseTwoTone'

export default {
  name: 'DatabaseTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DatabaseTwoToneSvg } },
      children
    )
};
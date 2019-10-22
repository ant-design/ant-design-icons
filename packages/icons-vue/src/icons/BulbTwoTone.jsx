// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import BulbTwoToneSvg from '@ant-design/icons-svg/lib/asn/BulbTwoTone'

export default {
  name: 'BulbTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BulbTwoToneSvg } },
      children
    )
};
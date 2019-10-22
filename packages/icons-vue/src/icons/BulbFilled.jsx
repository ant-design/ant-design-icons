// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import BulbFilledSvg from '@ant-design/icons-svg/lib/asn/BulbFilled'

export default {
  name: 'BulbFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BulbFilledSvg } },
      children
    )
};
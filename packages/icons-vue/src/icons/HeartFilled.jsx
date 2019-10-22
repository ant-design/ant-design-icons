// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import HeartFilledSvg from '@ant-design/icons-svg/lib/asn/HeartFilled'

export default {
  name: 'HeartFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: HeartFilledSvg } },
      children
    )
};
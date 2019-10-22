// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ProfileFilledSvg from '@ant-design/icons-svg/lib/asn/ProfileFilled'

export default {
  name: 'ProfileFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ProfileFilledSvg } },
      children
    )
};
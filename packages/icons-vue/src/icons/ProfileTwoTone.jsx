// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ProfileTwoToneSvg from '@ant-design/icons-svg/lib/asn/ProfileTwoTone'

export default {
  name: 'ProfileTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ProfileTwoToneSvg } },
      children
    )
};
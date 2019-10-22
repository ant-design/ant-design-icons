// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import InstagramFilledSvg from '@ant-design/icons-svg/lib/asn/InstagramFilled'

export default {
  name: 'InstagramFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: InstagramFilledSvg } },
      children
    )
};
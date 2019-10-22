// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ContactsTwoToneSvg from '@ant-design/icons-svg/lib/asn/ContactsTwoTone'

export default {
  name: 'ContactsTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ContactsTwoToneSvg } },
      children
    )
};
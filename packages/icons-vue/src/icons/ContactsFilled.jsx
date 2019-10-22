// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ContactsFilledSvg from '@ant-design/icons-svg/lib/asn/ContactsFilled'

export default {
  name: 'ContactsFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ContactsFilledSvg } },
      children
    )
};
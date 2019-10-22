// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ContactsSvg from '@ant-design/icons-svg/lib/asn/ContactsOutlined'

export default {
  name: 'Contacts',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ContactsSvg } },
      children
    )
};
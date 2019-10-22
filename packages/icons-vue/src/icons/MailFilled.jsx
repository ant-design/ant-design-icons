// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import MailFilledSvg from '@ant-design/icons-svg/lib/asn/MailFilled'

export default {
  name: 'MailFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MailFilledSvg } },
      children
    )
};
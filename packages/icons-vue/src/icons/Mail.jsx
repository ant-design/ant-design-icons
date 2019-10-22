// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import MailSvg from '@ant-design/icons-svg/lib/asn/MailOutlined'

export default {
  name: 'Mail',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MailSvg } },
      children
    )
};
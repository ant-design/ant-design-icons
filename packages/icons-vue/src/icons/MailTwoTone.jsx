// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import MailTwoToneSvg from '@ant-design/icons-svg/lib/asn/MailTwoTone'

export default {
  name: 'MailTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MailTwoToneSvg } },
      children
    )
};
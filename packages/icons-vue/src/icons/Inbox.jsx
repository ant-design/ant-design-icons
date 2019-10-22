// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import InboxSvg from '@ant-design/icons-svg/lib/asn/InboxOutlined'

export default {
  name: 'Inbox',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: InboxSvg } },
      children
    )
};
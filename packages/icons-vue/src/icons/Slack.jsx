// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import SlackSvg from '@ant-design/icons-svg/lib/asn/SlackOutlined'

export default {
  name: 'Slack',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SlackSvg } },
      children
    )
};
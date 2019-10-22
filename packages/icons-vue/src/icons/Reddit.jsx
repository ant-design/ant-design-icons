// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import RedditSvg from '@ant-design/icons-svg/lib/asn/RedditOutlined'

export default {
  name: 'Reddit',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RedditSvg } },
      children
    )
};
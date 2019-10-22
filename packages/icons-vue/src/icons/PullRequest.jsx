// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import PullRequestSvg from '@ant-design/icons-svg/lib/asn/PullRequestOutlined'

export default {
  name: 'PullRequest',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PullRequestSvg } },
      children
    )
};
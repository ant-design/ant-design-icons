// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import GithubSvg from '@ant-design/icons-svg/lib/asn/GithubOutlined'

export default {
  name: 'Github',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: GithubSvg } },
      children
    )
};
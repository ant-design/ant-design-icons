// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import GithubFilledSvg from '@ant-design/icons-svg/lib/asn/GithubFilled'

export default {
  name: 'GithubFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: GithubFilledSvg } },
      children
    )
};
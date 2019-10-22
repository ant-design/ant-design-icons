// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import GitlabSvg from '@ant-design/icons-svg/lib/asn/GitlabOutlined'

export default {
  name: 'Gitlab',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: GitlabSvg } },
      children
    )
};
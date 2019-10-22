// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import GitlabFilledSvg from '@ant-design/icons-svg/lib/asn/GitlabFilled'

export default {
  name: 'GitlabFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: GitlabFilledSvg } },
      children
    )
};
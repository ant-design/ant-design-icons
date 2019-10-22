// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import BugSvg from '@ant-design/icons-svg/lib/asn/BugOutlined'

export default {
  name: 'Bug',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BugSvg } },
      children
    )
};
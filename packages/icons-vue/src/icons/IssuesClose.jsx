// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import IssuesCloseSvg from '@ant-design/icons-svg/lib/asn/IssuesCloseOutlined'

export default {
  name: 'IssuesClose',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: IssuesCloseSvg } },
      children
    )
};
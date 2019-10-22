// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CopyrightSvg from '@ant-design/icons-svg/lib/asn/CopyrightOutlined'

export default {
  name: 'Copyright',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CopyrightSvg } },
      children
    )
};
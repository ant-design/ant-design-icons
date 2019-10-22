// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import SafetySvg from '@ant-design/icons-svg/lib/asn/SafetyOutlined'

export default {
  name: 'Safety',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SafetySvg } },
      children
    )
};
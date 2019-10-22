// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import InterationSvg from '@ant-design/icons-svg/lib/asn/InterationOutlined'

export default {
  name: 'Interation',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: InterationSvg } },
      children
    )
};
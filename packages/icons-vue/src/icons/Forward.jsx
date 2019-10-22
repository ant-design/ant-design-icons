// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ForwardSvg from '@ant-design/icons-svg/lib/asn/ForwardOutlined'

export default {
  name: 'Forward',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ForwardSvg } },
      children
    )
};
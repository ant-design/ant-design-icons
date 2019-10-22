// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import BackwardSvg from '@ant-design/icons-svg/lib/asn/BackwardOutlined'

export default {
  name: 'Backward',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BackwardSvg } },
      children
    )
};
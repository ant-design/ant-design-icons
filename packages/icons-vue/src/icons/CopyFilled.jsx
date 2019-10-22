// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CopyFilledSvg from '@ant-design/icons-svg/lib/asn/CopyFilled'

export default {
  name: 'CopyFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CopyFilledSvg } },
      children
    )
};
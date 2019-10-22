// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ReadFilledSvg from '@ant-design/icons-svg/lib/asn/ReadFilled'

export default {
  name: 'ReadFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ReadFilledSvg } },
      children
    )
};
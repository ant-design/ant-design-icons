// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import BookFilledSvg from '@ant-design/icons-svg/lib/asn/BookFilled'

export default {
  name: 'BookFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BookFilledSvg } },
      children
    )
};
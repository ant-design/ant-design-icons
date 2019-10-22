// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import BookSvg from '@ant-design/icons-svg/lib/asn/BookOutlined'

export default {
  name: 'Book',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BookSvg } },
      children
    )
};
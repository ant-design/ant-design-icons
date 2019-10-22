// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import UnorderedListSvg from '@ant-design/icons-svg/lib/asn/UnorderedListOutlined'

export default {
  name: 'UnorderedList',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: UnorderedListSvg } },
      children
    )
};
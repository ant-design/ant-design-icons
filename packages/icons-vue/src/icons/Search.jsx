// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import SearchSvg from '@ant-design/icons-svg/lib/asn/SearchOutlined'

export default {
  name: 'Search',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SearchSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FilterSvg from '@ant-design/icons-svg/lib/asn/FilterOutlined'

export default {
  name: 'Filter',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FilterSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import SortAscendingSvg from '@ant-design/icons-svg/lib/asn/SortAscendingOutlined'

export default {
  name: 'SortAscending',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SortAscendingSvg } },
      children
    )
};
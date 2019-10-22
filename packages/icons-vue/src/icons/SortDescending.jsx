// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import SortDescendingSvg from '@ant-design/icons-svg/lib/asn/SortDescendingOutlined'

export default {
  name: 'SortDescending',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SortDescendingSvg } },
      children
    )
};
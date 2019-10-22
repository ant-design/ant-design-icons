// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import HistorySvg from '@ant-design/icons-svg/lib/asn/HistoryOutlined'

export default {
  name: 'History',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: HistorySvg } },
      children
    )
};
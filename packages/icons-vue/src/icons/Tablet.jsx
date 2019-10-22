// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import TabletSvg from '@ant-design/icons-svg/lib/asn/TabletOutlined'

export default {
  name: 'Tablet',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TabletSvg } },
      children
    )
};
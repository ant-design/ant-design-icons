// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import DingdingSvg from '@ant-design/icons-svg/lib/asn/DingdingOutlined'

export default {
  name: 'Dingding',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DingdingSvg } },
      children
    )
};
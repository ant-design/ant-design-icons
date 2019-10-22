// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ZoomOutSvg from '@ant-design/icons-svg/lib/asn/ZoomOutOutlined'

export default {
  name: 'ZoomOut',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ZoomOutSvg } },
      children
    )
};
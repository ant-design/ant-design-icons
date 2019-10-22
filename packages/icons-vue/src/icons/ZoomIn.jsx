// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ZoomInSvg from '@ant-design/icons-svg/lib/asn/ZoomInOutlined'

export default {
  name: 'ZoomIn',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ZoomInSvg } },
      children
    )
};
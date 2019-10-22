// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ToTopSvg from '@ant-design/icons-svg/lib/asn/ToTopOutlined'

export default {
  name: 'ToTop',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ToTopSvg } },
      children
    )
};
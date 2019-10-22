// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import SmileSvg from '@ant-design/icons-svg/lib/asn/SmileOutlined'

export default {
  name: 'Smile',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SmileSvg } },
      children
    )
};
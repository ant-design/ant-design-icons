// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ShareAltSvg from '@ant-design/icons-svg/lib/asn/ShareAltOutlined'

export default {
  name: 'ShareAlt',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ShareAltSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import GooglePlusSvg from '@ant-design/icons-svg/lib/asn/GooglePlusOutlined'

export default {
  name: 'GooglePlus',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: GooglePlusSvg } },
      children
    )
};
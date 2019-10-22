// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FacebookSvg from '@ant-design/icons-svg/lib/asn/FacebookOutlined'

export default {
  name: 'Facebook',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FacebookSvg } },
      children
    )
};
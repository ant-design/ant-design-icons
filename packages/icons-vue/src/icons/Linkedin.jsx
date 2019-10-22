// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import LinkedinSvg from '@ant-design/icons-svg/lib/asn/LinkedinOutlined'

export default {
  name: 'Linkedin',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LinkedinSvg } },
      children
    )
};
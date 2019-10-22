// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import EnvironmentSvg from '@ant-design/icons-svg/lib/asn/EnvironmentOutlined'

export default {
  name: 'Environment',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: EnvironmentSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ExclamationSvg from '@ant-design/icons-svg/lib/asn/ExclamationOutlined'

export default {
  name: 'Exclamation',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ExclamationSvg } },
      children
    )
};
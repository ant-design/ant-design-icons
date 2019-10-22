// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ExceptionSvg from '@ant-design/icons-svg/lib/asn/ExceptionOutlined'

export default {
  name: 'Exception',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ExceptionSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ExclamationCircleSvg from '@ant-design/icons-svg/lib/asn/ExclamationCircleOutlined'

export default {
  name: 'ExclamationCircle',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ExclamationCircleSvg } },
      children
    )
};
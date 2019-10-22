// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import MinusCircleSvg from '@ant-design/icons-svg/lib/asn/MinusCircleOutlined'

export default {
  name: 'MinusCircle',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MinusCircleSvg } },
      children
    )
};
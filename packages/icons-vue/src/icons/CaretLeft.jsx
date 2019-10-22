// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CaretLeftSvg from '@ant-design/icons-svg/lib/asn/CaretLeftOutlined'

export default {
  name: 'CaretLeft',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CaretLeftSvg } },
      children
    )
};
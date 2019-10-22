// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CaretUpSvg from '@ant-design/icons-svg/lib/asn/CaretUpOutlined'

export default {
  name: 'CaretUp',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CaretUpSvg } },
      children
    )
};
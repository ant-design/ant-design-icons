// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CaretRightSvg from '@ant-design/icons-svg/lib/asn/CaretRightOutlined'

export default {
  name: 'CaretRight',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CaretRightSvg } },
      children
    )
};
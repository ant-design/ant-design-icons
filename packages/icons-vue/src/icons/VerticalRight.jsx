// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import VerticalRightSvg from '@ant-design/icons-svg/lib/asn/VerticalRightOutlined'

export default {
  name: 'VerticalRight',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: VerticalRightSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import VerticalLeftSvg from '@ant-design/icons-svg/lib/asn/VerticalLeftOutlined'

export default {
  name: 'VerticalLeft',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: VerticalLeftSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import LeftSvg from '@ant-design/icons-svg/lib/asn/LeftOutlined'

export default {
  name: 'Left',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LeftSvg } },
      children
    )
};
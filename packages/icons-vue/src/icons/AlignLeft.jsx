// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import AlignLeftSvg from '@ant-design/icons-svg/lib/asn/AlignLeftOutlined'

export default {
  name: 'AlignLeft',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AlignLeftSvg } },
      children
    )
};
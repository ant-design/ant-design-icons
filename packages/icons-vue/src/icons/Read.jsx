// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ReadSvg from '@ant-design/icons-svg/lib/asn/ReadOutlined'

export default {
  name: 'Read',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ReadSvg } },
      children
    )
};
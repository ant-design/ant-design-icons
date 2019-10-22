// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ArrowLeftSvg from '@ant-design/icons-svg/lib/asn/ArrowLeftOutlined'

export default {
  name: 'ArrowLeft',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ArrowLeftSvg } },
      children
    )
};
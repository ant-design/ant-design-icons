// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import DownCircleSvg from '@ant-design/icons-svg/lib/asn/DownCircleOutlined'

export default {
  name: 'DownCircle',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DownCircleSvg } },
      children
    )
};
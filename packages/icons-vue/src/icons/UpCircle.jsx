// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import UpCircleSvg from '@ant-design/icons-svg/lib/asn/UpCircleOutlined'

export default {
  name: 'UpCircle',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: UpCircleSvg } },
      children
    )
};
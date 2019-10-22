// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CloseCircleSvg from '@ant-design/icons-svg/lib/asn/CloseCircleOutlined'

export default {
  name: 'CloseCircle',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CloseCircleSvg } },
      children
    )
};
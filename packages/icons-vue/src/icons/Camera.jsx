// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CameraSvg from '@ant-design/icons-svg/lib/asn/CameraOutlined'

export default {
  name: 'Camera',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CameraSvg } },
      children
    )
};
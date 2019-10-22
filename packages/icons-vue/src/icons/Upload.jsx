// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import UploadSvg from '@ant-design/icons-svg/lib/asn/UploadOutlined'

export default {
  name: 'Upload',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: UploadSvg } },
      children
    )
};
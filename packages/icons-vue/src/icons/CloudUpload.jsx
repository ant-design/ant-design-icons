// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CloudUploadSvg from '@ant-design/icons-svg/lib/asn/CloudUploadOutlined'

export default {
  name: 'CloudUpload',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CloudUploadSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CloudDownloadSvg from '@ant-design/icons-svg/lib/asn/CloudDownloadOutlined'

export default {
  name: 'CloudDownload',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CloudDownloadSvg } },
      children
    )
};
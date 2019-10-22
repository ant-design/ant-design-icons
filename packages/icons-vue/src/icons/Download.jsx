// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import DownloadSvg from '@ant-design/icons-svg/lib/asn/DownloadOutlined'

export default {
  name: 'Download',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DownloadSvg } },
      children
    )
};
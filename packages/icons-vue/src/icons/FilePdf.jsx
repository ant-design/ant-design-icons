// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FilePdfSvg from '@ant-design/icons-svg/lib/asn/FilePdfOutlined'

export default {
  name: 'FilePdf',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FilePdfSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FileJpgSvg from '@ant-design/icons-svg/lib/asn/FileJpgOutlined'

export default {
  name: 'FileJpg',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileJpgSvg } },
      children
    )
};
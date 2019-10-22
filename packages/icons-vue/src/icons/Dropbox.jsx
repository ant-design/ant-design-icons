// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import DropboxSvg from '@ant-design/icons-svg/lib/asn/DropboxOutlined'

export default {
  name: 'Dropbox',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DropboxSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FileAddTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileAddTwoTone'

export default {
  name: 'FileAddTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileAddTwoToneSvg } },
      children
    )
};
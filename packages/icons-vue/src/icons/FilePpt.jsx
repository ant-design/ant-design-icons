// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FilePptSvg from '@ant-design/icons-svg/lib/asn/FilePptOutlined'

export default {
  name: 'FilePpt',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FilePptSvg } },
      children
    )
};
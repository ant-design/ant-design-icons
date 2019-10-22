// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FilePptFilledSvg from '@ant-design/icons-svg/lib/asn/FilePptFilled'

export default {
  name: 'FilePptFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FilePptFilledSvg } },
      children
    )
};
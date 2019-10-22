// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FileDoneSvg from '@ant-design/icons-svg/lib/asn/FileDoneOutlined'

export default {
  name: 'FileDone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileDoneSvg } },
      children
    )
};
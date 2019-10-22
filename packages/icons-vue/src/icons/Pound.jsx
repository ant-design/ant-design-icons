// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import PoundSvg from '@ant-design/icons-svg/lib/asn/PoundOutlined'

export default {
  name: 'Pound',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PoundSvg } },
      children
    )
};
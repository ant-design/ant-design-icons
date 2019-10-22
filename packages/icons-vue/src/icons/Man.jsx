// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ManSvg from '@ant-design/icons-svg/lib/asn/ManOutlined'

export default {
  name: 'Man',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ManSvg } },
      children
    )
};
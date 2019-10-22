// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import MoreSvg from '@ant-design/icons-svg/lib/asn/MoreOutlined'

export default {
  name: 'More',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MoreSvg } },
      children
    )
};
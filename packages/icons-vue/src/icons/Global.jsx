// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import GlobalSvg from '@ant-design/icons-svg/lib/asn/GlobalOutlined'

export default {
  name: 'Global',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: GlobalSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ReloadSvg from '@ant-design/icons-svg/lib/asn/ReloadOutlined'

export default {
  name: 'Reload',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ReloadSvg } },
      children
    )
};
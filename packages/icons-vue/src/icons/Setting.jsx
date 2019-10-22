// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import SettingSvg from '@ant-design/icons-svg/lib/asn/SettingOutlined'

export default {
  name: 'Setting',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SettingSvg } },
      children
    )
};
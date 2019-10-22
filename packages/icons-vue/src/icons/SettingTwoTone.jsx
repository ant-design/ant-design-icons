// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import SettingTwoToneSvg from '@ant-design/icons-svg/lib/asn/SettingTwoTone'

export default {
  name: 'SettingTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SettingTwoToneSvg } },
      children
    )
};
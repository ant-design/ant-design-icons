// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import SettingFilledSvg from '@ant-design/icons-svg/lib/asn/SettingFilled'

export default {
  name: 'SettingFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SettingFilledSvg } },
      children
    )
};
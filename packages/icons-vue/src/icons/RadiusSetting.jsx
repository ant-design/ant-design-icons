// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import RadiusSettingSvg from '@ant-design/icons-svg/lib/asn/RadiusSettingOutlined'

export default {
  name: 'RadiusSetting',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RadiusSettingSvg } },
      children
    )
};
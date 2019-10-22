// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import AppstoreTwoToneSvg from '@ant-design/icons-svg/lib/asn/AppstoreTwoTone'

export default {
  name: 'AppstoreTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AppstoreTwoToneSvg } },
      children
    )
};
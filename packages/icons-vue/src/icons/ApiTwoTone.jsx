// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ApiTwoToneSvg from '@ant-design/icons-svg/lib/asn/ApiTwoTone'

export default {
  name: 'ApiTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ApiTwoToneSvg } },
      children
    )
};
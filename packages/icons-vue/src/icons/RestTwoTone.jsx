// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import RestTwoToneSvg from '@ant-design/icons-svg/lib/asn/RestTwoTone'

export default {
  name: 'RestTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RestTwoToneSvg } },
      children
    )
};
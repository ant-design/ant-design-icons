// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ApiFilledSvg from '@ant-design/icons-svg/lib/asn/ApiFilled'

export default {
  name: 'ApiFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ApiFilledSvg } },
      children
    )
};
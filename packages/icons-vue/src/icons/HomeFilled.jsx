// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import HomeFilledSvg from '@ant-design/icons-svg/lib/asn/HomeFilled'

export default {
  name: 'HomeFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: HomeFilledSvg } },
      children
    )
};
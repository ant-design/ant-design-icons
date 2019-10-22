// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import SkypeFilledSvg from '@ant-design/icons-svg/lib/asn/SkypeFilled'

export default {
  name: 'SkypeFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SkypeFilledSvg } },
      children
    )
};
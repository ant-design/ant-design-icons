// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ChromeFilledSvg from '@ant-design/icons-svg/lib/asn/ChromeFilled'

export default {
  name: 'ChromeFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ChromeFilledSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import AndroidFilledSvg from '@ant-design/icons-svg/lib/asn/AndroidFilled'

export default {
  name: 'AndroidFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AndroidFilledSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import AlertFilledSvg from '@ant-design/icons-svg/lib/asn/AlertFilled'

export default {
  name: 'AlertFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AlertFilledSvg } },
      children
    )
};
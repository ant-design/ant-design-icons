// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import AlipayCircleFilledSvg from '@ant-design/icons-svg/lib/asn/AlipayCircleFilled'

export default {
  name: 'AlipayCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AlipayCircleFilledSvg } },
      children
    )
};
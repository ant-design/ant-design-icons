// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import DribbbleCircleFilledSvg from '@ant-design/icons-svg/lib/asn/DribbbleCircleFilled'

export default {
  name: 'DribbbleCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DribbbleCircleFilledSvg } },
      children
    )
};
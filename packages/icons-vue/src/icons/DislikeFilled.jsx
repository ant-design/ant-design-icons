// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import DislikeFilledSvg from '@ant-design/icons-svg/lib/asn/DislikeFilled'

export default {
  name: 'DislikeFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DislikeFilledSvg } },
      children
    )
};
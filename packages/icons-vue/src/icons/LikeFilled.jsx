// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import LikeFilledSvg from '@ant-design/icons-svg/lib/asn/LikeFilled'

export default {
  name: 'LikeFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LikeFilledSvg } },
      children
    )
};
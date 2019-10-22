// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import LikeSvg from '@ant-design/icons-svg/lib/asn/LikeOutlined'

export default {
  name: 'Like',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LikeSvg } },
      children
    )
};
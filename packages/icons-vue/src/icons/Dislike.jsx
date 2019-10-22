// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import DislikeSvg from '@ant-design/icons-svg/lib/asn/DislikeOutlined'

export default {
  name: 'Dislike',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DislikeSvg } },
      children
    )
};
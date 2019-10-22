// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import RedditCircleFilledSvg from '@ant-design/icons-svg/lib/asn/RedditCircleFilled'

export default {
  name: 'RedditCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RedditCircleFilledSvg } },
      children
    )
};
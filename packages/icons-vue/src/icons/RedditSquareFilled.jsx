// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import RedditSquareFilledSvg from '@ant-design/icons-svg/lib/asn/RedditSquareFilled'

export default {
  name: 'RedditSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RedditSquareFilledSvg } },
      children
    )
};
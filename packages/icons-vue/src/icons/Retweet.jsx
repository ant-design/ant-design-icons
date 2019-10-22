// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import RetweetSvg from '@ant-design/icons-svg/lib/asn/RetweetOutlined'

export default {
  name: 'Retweet',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RetweetSvg } },
      children
    )
};
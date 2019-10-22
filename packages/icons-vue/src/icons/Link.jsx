// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import LinkSvg from '@ant-design/icons-svg/lib/asn/LinkOutlined'

export default {
  name: 'Link',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LinkSvg } },
      children
    )
};
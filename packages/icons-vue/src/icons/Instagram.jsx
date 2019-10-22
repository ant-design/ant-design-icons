// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import InstagramSvg from '@ant-design/icons-svg/lib/asn/InstagramOutlined'

export default {
  name: 'Instagram',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: InstagramSvg } },
      children
    )
};
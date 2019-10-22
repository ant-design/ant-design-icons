// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import SkypeSvg from '@ant-design/icons-svg/lib/asn/SkypeOutlined'

export default {
  name: 'Skype',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SkypeSvg } },
      children
    )
};
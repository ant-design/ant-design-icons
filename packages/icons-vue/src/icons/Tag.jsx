// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import TagSvg from '@ant-design/icons-svg/lib/asn/TagOutlined'

export default {
  name: 'Tag',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TagSvg } },
      children
    )
};
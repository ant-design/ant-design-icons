// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import TagsSvg from '@ant-design/icons-svg/lib/asn/TagsOutlined'

export default {
  name: 'Tags',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TagsSvg } },
      children
    )
};
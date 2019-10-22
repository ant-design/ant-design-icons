// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import TagsTwoToneSvg from '@ant-design/icons-svg/lib/asn/TagsTwoTone'

export default {
  name: 'TagsTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TagsTwoToneSvg } },
      children
    )
};
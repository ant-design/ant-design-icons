// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import TagTwoToneSvg from '@ant-design/icons-svg/lib/asn/TagTwoTone'

export default {
  name: 'TagTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TagTwoToneSvg } },
      children
    )
};
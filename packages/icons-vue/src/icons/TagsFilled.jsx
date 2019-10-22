// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import TagsFilledSvg from '@ant-design/icons-svg/lib/asn/TagsFilled'

export default {
  name: 'TagsFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TagsFilledSvg } },
      children
    )
};
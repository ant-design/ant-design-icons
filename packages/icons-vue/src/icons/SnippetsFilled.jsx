// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import SnippetsFilledSvg from '@ant-design/icons-svg/lib/asn/SnippetsFilled'

export default {
  name: 'SnippetsFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SnippetsFilledSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ThunderboltFilledSvg from '@ant-design/icons-svg/lib/asn/ThunderboltFilled'

export default {
  name: 'ThunderboltFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ThunderboltFilledSvg } },
      children
    )
};
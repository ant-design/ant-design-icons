// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import YuqueFilledSvg from '@ant-design/icons-svg/lib/asn/YuqueFilled'

export default {
  name: 'YuqueFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: YuqueFilledSvg } },
      children
    )
};
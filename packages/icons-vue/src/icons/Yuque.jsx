// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import YuqueSvg from '@ant-design/icons-svg/lib/asn/YuqueOutlined'

export default {
  name: 'Yuque',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: YuqueSvg } },
      children
    )
};
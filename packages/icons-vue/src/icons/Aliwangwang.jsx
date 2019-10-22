// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import AliwangwangSvg from '@ant-design/icons-svg/lib/asn/AliwangwangOutlined'

export default {
  name: 'Aliwangwang',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AliwangwangSvg } },
      children
    )
};
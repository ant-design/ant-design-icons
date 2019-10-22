// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import AlipaySvg from '@ant-design/icons-svg/lib/asn/AlipayOutlined'

export default {
  name: 'Alipay',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AlipaySvg } },
      children
    )
};
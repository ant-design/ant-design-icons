// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import MoneyCollectSvg from '@ant-design/icons-svg/lib/asn/MoneyCollectOutlined'

export default {
  name: 'MoneyCollect',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MoneyCollectSvg } },
      children
    )
};
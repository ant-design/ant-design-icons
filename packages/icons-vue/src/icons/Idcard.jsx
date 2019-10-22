// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import IdcardSvg from '@ant-design/icons-svg/lib/asn/IdcardOutlined'

export default {
  name: 'Idcard',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: IdcardSvg } },
      children
    )
};
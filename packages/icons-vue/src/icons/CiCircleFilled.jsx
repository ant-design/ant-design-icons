// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CiCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CiCircleFilled'

export default {
  name: 'CiCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CiCircleFilledSvg } },
      children
    )
};
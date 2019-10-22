// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import UpCircleFilledSvg from '@ant-design/icons-svg/lib/asn/UpCircleFilled'

export default {
  name: 'UpCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: UpCircleFilledSvg } },
      children
    )
};
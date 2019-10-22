// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import PoundCircleFilledSvg from '@ant-design/icons-svg/lib/asn/PoundCircleFilled'

export default {
  name: 'PoundCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PoundCircleFilledSvg } },
      children
    )
};
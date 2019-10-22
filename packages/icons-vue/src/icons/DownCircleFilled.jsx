// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import DownCircleFilledSvg from '@ant-design/icons-svg/lib/asn/DownCircleFilled'

export default {
  name: 'DownCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DownCircleFilledSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CloseCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CloseCircleFilled'

export default {
  name: 'CloseCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CloseCircleFilledSvg } },
      children
    )
};
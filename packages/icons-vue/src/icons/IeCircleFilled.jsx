// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import IeCircleFilledSvg from '@ant-design/icons-svg/lib/asn/IeCircleFilled'

export default {
  name: 'IeCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: IeCircleFilledSvg } },
      children
    )
};
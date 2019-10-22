// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ExclamationCircleFilledSvg from '@ant-design/icons-svg/lib/asn/ExclamationCircleFilled'

export default {
  name: 'ExclamationCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ExclamationCircleFilledSvg } },
      children
    )
};
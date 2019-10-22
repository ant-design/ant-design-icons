// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import EditFilledSvg from '@ant-design/icons-svg/lib/asn/EditFilled'

export default {
  name: 'EditFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: EditFilledSvg } },
      children
    )
};
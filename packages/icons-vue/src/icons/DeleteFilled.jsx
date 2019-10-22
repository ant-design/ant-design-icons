// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import DeleteFilledSvg from '@ant-design/icons-svg/lib/asn/DeleteFilled'

export default {
  name: 'DeleteFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DeleteFilledSvg } },
      children
    )
};
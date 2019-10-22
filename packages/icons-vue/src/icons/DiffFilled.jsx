// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import DiffFilledSvg from '@ant-design/icons-svg/lib/asn/DiffFilled'

export default {
  name: 'DiffFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DiffFilledSvg } },
      children
    )
};
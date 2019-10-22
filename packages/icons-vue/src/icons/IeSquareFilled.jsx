// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import IeSquareFilledSvg from '@ant-design/icons-svg/lib/asn/IeSquareFilled'

export default {
  name: 'IeSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: IeSquareFilledSvg } },
      children
    )
};
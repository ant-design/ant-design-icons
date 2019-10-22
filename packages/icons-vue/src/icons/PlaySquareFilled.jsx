// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import PlaySquareFilledSvg from '@ant-design/icons-svg/lib/asn/PlaySquareFilled'

export default {
  name: 'PlaySquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PlaySquareFilledSvg } },
      children
    )
};
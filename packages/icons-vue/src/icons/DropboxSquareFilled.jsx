// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import DropboxSquareFilledSvg from '@ant-design/icons-svg/lib/asn/DropboxSquareFilled'

export default {
  name: 'DropboxSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DropboxSquareFilledSvg } },
      children
    )
};
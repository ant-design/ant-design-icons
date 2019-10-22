// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import DropboxCircleFilledSvg from '@ant-design/icons-svg/lib/asn/DropboxCircleFilled'

export default {
  name: 'DropboxCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DropboxCircleFilledSvg } },
      children
    )
};
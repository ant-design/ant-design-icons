// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import PictureFilledSvg from '@ant-design/icons-svg/lib/asn/PictureFilled'

export default {
  name: 'PictureFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PictureFilledSvg } },
      children
    )
};
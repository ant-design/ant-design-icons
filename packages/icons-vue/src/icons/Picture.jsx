// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import PictureSvg from '@ant-design/icons-svg/lib/asn/PictureOutlined'

export default {
  name: 'Picture',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PictureSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import PictureTwoToneSvg from '@ant-design/icons-svg/lib/asn/PictureTwoTone'

export default {
  name: 'PictureTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PictureTwoToneSvg } },
      children
    )
};
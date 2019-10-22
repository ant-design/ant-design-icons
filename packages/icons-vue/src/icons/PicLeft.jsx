// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import PicLeftSvg from '@ant-design/icons-svg/lib/asn/PicLeftOutlined'

export default {
  name: 'PicLeft',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PicLeftSvg } },
      children
    )
};
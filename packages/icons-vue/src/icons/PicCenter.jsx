// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import PicCenterSvg from '@ant-design/icons-svg/lib/asn/PicCenterOutlined'

export default {
  name: 'PicCenter',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PicCenterSvg } },
      children
    )
};
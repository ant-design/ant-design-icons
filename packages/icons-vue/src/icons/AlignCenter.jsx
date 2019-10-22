// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import AlignCenterSvg from '@ant-design/icons-svg/lib/asn/AlignCenterOutlined'

export default {
  name: 'AlignCenter',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AlignCenterSvg } },
      children
    )
};
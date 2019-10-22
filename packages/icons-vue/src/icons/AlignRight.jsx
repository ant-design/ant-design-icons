// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import AlignRightSvg from '@ant-design/icons-svg/lib/asn/AlignRightOutlined'

export default {
  name: 'AlignRight',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AlignRightSvg } },
      children
    )
};
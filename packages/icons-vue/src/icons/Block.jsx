// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import BlockSvg from '@ant-design/icons-svg/lib/asn/BlockOutlined'

export default {
  name: 'Block',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BlockSvg } },
      children
    )
};
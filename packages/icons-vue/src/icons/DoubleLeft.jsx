// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import DoubleLeftSvg from '@ant-design/icons-svg/lib/asn/DoubleLeftOutlined'

export default {
  name: 'DoubleLeft',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DoubleLeftSvg } },
      children
    )
};
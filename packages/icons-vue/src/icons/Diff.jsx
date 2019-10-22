// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import DiffSvg from '@ant-design/icons-svg/lib/asn/DiffOutlined'

export default {
  name: 'Diff',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DiffSvg } },
      children
    )
};
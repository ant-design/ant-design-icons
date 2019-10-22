// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import DeleteSvg from '@ant-design/icons-svg/lib/asn/DeleteOutlined'

export default {
  name: 'Delete',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DeleteSvg } },
      children
    )
};
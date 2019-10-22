// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import SelectSvg from '@ant-design/icons-svg/lib/asn/SelectOutlined'

export default {
  name: 'Select',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SelectSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import SaveSvg from '@ant-design/icons-svg/lib/asn/SaveOutlined'

export default {
  name: 'Save',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SaveSvg } },
      children
    )
};